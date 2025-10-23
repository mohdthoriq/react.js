import React from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, FormDescription } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent } from "@/components/ui/card";
import { User, Mail, Shield, UserCheck } from 'lucide-react';
import type { UserWithoutId } from "@/types";

// Schema yang sesuai dengan UserWithoutId
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  role: z.enum(['admin', 'user', 'moderator']),
  isActive: z.boolean().default(true),
});

type FormValues = z.infer<typeof formSchema>;

interface UserFormProps {
  onSubmit: (data: UserWithoutId) => void;
  initialData?: Partial<UserWithoutId>;
}

export function UserForm({ onSubmit, initialData }: UserFormProps) {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema) as any,
    defaultValues: {
      name: initialData?.name || "",
      email: initialData?.email || "",
      role: initialData?.role || "user",
      isActive: initialData?.isActive ?? true,
    },
  });

  const handleSubmit = (data: FormValues) => {
    const userData: UserWithoutId = {
      name: data.name,
      email: data.email,
      isActive: data.isActive,
      role: data.role,
    };
    onSubmit(userData);
    form.reset();
  };

  return (
    <Card className="border-0 shadow-none bg-transparent">
      <CardContent className="p-0">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
            {/* Name Field */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-foreground flex items-center gap-2">
                    <User className="h-4 w-4" />
                    Full Name *
                  </FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Enter user's full name" 
                      {...field}
                      className="h-11 bg-background border-border/50 focus:border-primary/50 transition-colors"
                    />
                  </FormControl>
                  <FormDescription className="text-xs">
                    Enter the user's full name (minimum 2 characters)
                  </FormDescription>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />
            
            {/* Email Field */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-foreground flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    Email Address *
                  </FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Enter email address" 
                      {...field}
                      className="h-11 bg-background border-border/50 focus:border-primary/50 transition-colors"
                    />
                  </FormControl>
                  <FormDescription className="text-xs">
                    Enter a valid email address for the user
                  </FormDescription>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />
            
            {/* Role Field */}
            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-foreground flex items-center gap-2">
                    <Shield className="h-4 w-4" />
                    User Role *
                  </FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="h-11 bg-background border-border/50 focus:border-primary/50 transition-colors">
                        <SelectValue placeholder="Select a user role" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-background border-border/50">
                      <SelectItem 
                        value="user"
                        className="focus:bg-accent transition-colors"
                      >
                        <div className="flex items-center gap-2">
                          <User className="h-4 w-4" />
                          <span>User</span>
                        </div>
                      </SelectItem>
                      <SelectItem 
                        value="moderator"
                        className="focus:bg-accent transition-colors"
                      >
                        <div className="flex items-center gap-2">
                          <Shield className="h-4 w-4" />
                          <span>Moderator</span>
                        </div>
                      </SelectItem>
                      <SelectItem 
                        value="admin"
                        className="focus:bg-accent transition-colors"
                      >
                        <div className="flex items-center gap-2">
                          <Shield className="h-4 w-4 text-red-500" />
                          <span>Administrator</span>
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormDescription className="text-xs">
                    Select the appropriate role for this user
                  </FormDescription>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />
            
            {/* Active Status Switch */}
            <FormField
              control={form.control}
              name="isActive"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-xl border border-border/50 p-4 bg-background/50 transition-all hover:bg-accent/20">
                  <div className="space-y-0.5 flex-1">
                    <FormLabel className="text-sm font-medium text-foreground flex items-center gap-2">
                      <UserCheck className="h-4 w-4" />
                      Account Status
                    </FormLabel>
                    <FormDescription className="text-xs text-muted-foreground">
                      Whether the user account is active and can access the system
                    </FormDescription>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      className="data-[state=checked]:bg-green-500"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            
            {/* Submit Button */}
            <Button 
              type="submit" 
              className="w-full h-11 bg-primary hover:bg-primary/90 shadow-sm shadow-primary/20 transition-all font-medium text-base"
            >
              {initialData ? 'Update User' : 'Create User'}
            </Button>

            {/* Form Helper Text */}
            <div className="text-center pt-2">
              <p className="text-xs text-muted-foreground">
                Fields marked with * are required
              </p>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}