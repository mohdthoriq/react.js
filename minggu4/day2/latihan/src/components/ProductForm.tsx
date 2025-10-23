import React from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, FormDescription } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent } from "@/components/ui/card";
import type { Product } from "@/types";
import { 
  Package, 
  DollarSign, 
  Layers, 
  Image, 
  Tag, 
  CheckCircle, 
  XCircle,
  Plus,
  Edit3,
  Sparkles
} from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  description: z.string().optional(),
  price: z.coerce.number().min(0.01, { message: "Price must be greater than 0." }),
  stock: z.coerce.number().min(0, { message: "Stock cannot be negative." }),
  category: z.string().min(1, { message: "Please select a category." }),
  image: z.string().url().optional().or(z.literal('')),
  isAvailable: z.boolean().default(true),
});

type FormValues = z.infer<typeof formSchema>;

interface ProductFormProps {
  onSubmit: (data: Omit<Product, 'id'>) => void;
  onCancel?: () => void;
  initialData?: Partial<Product>;
}

export function ProductForm({ onSubmit, onCancel, initialData }: ProductFormProps) {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema) as any,
    defaultValues: {
      name: initialData?.name || "",
      description: initialData?.description || "",
      price: initialData?.price || 0,
      stock: initialData?.stock || 0,
      category: initialData?.category || "",
      image: initialData?.image || "",
      isAvailable: initialData?.isAvailable ?? true,
    },
  });

  const handleSubmit = (data: FormValues) => {
    const productData: Omit<Product, 'id'> = {
      name: data.name,
      description: data.description,
      price: data.price,
      stock: data.stock,
      category: data.category,
      image: data.image,
      isAvailable: data.isAvailable,
    };
    onSubmit(productData);
    form.reset();
  };

  const categories = [
    "Electronics",
    "Accessories", 
    "Audio",
    "Computers",
    "Phones",
    "Home",
    "Office",
    "Other"
  ];

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Electronics': 'from-blue-500 to-cyan-500',
      'Accessories': 'from-purple-500 to-pink-500',
      'Audio': 'from-green-500 to-emerald-500',
      'Computers': 'from-orange-500 to-red-500',
      'Phones': 'from-indigo-500 to-purple-500',
      'Home': 'from-amber-500 to-yellow-500',
      'Office': 'from-gray-500 to-slate-500',
      'Other': 'from-teal-500 to-cyan-500'
    };
    return colors[category] || 'from-gray-500 to-slate-500';
  };

  return (
    <div className="space-y-6">
      {/* Form Header */}
      <div className="text-center space-y-2">
        <div className="flex justify-center">
          <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg">
            {initialData ? (
              <Edit3 className="h-6 w-6 text-white" />
            ) : (
              <Plus className="h-6 w-6 text-white" />
            )}
          </div>
        </div>
        <h3 className="text-xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
          {initialData ? 'Update Product' : 'Create New Product'}
        </h3>
        <p className="text-sm text-gray-600">
          {initialData ? 'Update your product details' : 'Add a new product to your catalog'}
        </p>
      </div>

      <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-gray-50/50 backdrop-blur-sm">
        <CardContent className="p-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
              {/* Product Name */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-semibold text-gray-800 flex items-center gap-2">
                      <Package className="h-4 w-4 text-blue-600" />
                      Product Name *
                    </FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Enter product name" 
                        {...field}
                        className="h-12 bg-white border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 rounded-xl"
                      />
                    </FormControl>
                    <FormMessage className="text-xs text-red-600 font-medium" />
                  </FormItem>
                )}
              />
              
              {/* Description */}
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-semibold text-gray-800 flex items-center gap-2">
                      <Edit3 className="h-4 w-4 text-purple-600" />
                      Description
                    </FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Enter product description..." 
                        {...field}
                        className="min-h-[120px] bg-white border-2 border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 resize-none transition-all duration-300 rounded-xl"
                      />
                    </FormControl>
                    <FormDescription className="text-xs text-gray-500 flex items-center gap-1">
                      <Sparkles className="h-3 w-3" />
                      Provide a detailed description of your product
                    </FormDescription>
                    <FormMessage className="text-xs text-red-600 font-medium" />
                  </FormItem>
                )}
              />
              
              {/* Price & Stock */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="price"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-semibold text-gray-800 flex items-center gap-2">
                        <DollarSign className="h-4 w-4 text-green-600" />
                        Price ($) *
                      </FormLabel>
                      <FormControl>
                        <Input 
                          type="number" 
                          step="0.01" 
                          placeholder="0.00" 
                          {...field}
                          className="h-12 bg-white border-2 border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all duration-300 rounded-xl"
                        />
                      </FormControl>
                      <FormMessage className="text-xs text-red-600 font-medium" />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="stock"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-semibold text-gray-800 flex items-center gap-2">
                        <Layers className="h-4 w-4 text-orange-600" />
                        Stock Quantity *
                      </FormLabel>
                      <FormControl>
                        <Input 
                          type="number" 
                          placeholder="0" 
                          {...field}
                          className="h-12 bg-white border-2 border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300 rounded-xl"
                        />
                      </FormControl>
                      <FormMessage className="text-xs text-red-600 font-medium" />
                    </FormItem>
                  )}
                />
              </div>
              
              {/* Category */}
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-semibold text-gray-800 flex items-center gap-2">
                      <Tag className="h-4 w-4 text-indigo-600" />
                      Category *
                    </FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="h-12 bg-white border-2 border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-300 rounded-xl">
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="bg-white border-2 border-gray-200 shadow-xl rounded-xl">
                        {categories.map(category => (
                          <SelectItem 
                            key={category} 
                            value={category}
                            className={`focus:bg-gradient-to-r ${getCategoryColor(category)} focus:text-white transition-all duration-300 rounded-lg`}
                          >
                            <div className="flex items-center gap-2">
                              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${getCategoryColor(category)}`} />
                              {category}
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage className="text-xs text-red-600 font-medium" />
                  </FormItem>
                )}
              />
              
              {/* Image URL */}
              <FormField
                control={form.control}
                name="image"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-semibold text-gray-800 flex items-center gap-2">
                      <Image className="h-4 w-4 text-pink-600" />
                      Image URL
                    </FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="https://example.com/image.jpg" 
                        {...field}
                        className="h-12 bg-white border-2 border-gray-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 transition-all duration-300 rounded-xl"
                      />
                    </FormControl>
                    <FormDescription className="text-xs text-gray-500 flex items-center gap-1">
                      <Sparkles className="h-3 w-3" />
                      Provide a URL to your product image (optional)
                    </FormDescription>
                    <FormMessage className="text-xs text-red-600 font-medium" />
                  </FormItem>
                )}
              />
              
              {/* Availability Switch */}
              <FormField
                control={form.control}
                name="isAvailable"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-between rounded-2xl border-2 border-gray-200 p-5 bg-gradient-to-r from-white to-gray-50/50 transition-all duration-300 hover:shadow-md">
                    <div className="space-y-1 flex-1">
                      <FormLabel className="text-sm font-semibold text-gray-800 flex items-center gap-2">
                        {field.value ? (
                          <CheckCircle className="h-4 w-4 text-green-600" />
                        ) : (
                          <XCircle className="h-4 w-4 text-red-600" />
                        )}
                        Available for Sale
                      </FormLabel>
                      <FormDescription className="text-xs text-gray-500">
                        {field.value 
                          ? "This product is currently available for purchase" 
                          : "This product is not available for purchase"
                        }
                      </FormDescription>
                    </div>
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        className="data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-red-500"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              
              {/* Action Buttons */}
              <div className="flex gap-3 pt-4">
                <Button 
                  type="submit" 
                  className="flex-1 h-12 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white shadow-lg shadow-green-500/25 transition-all duration-300 font-semibold rounded-xl group"
                >
                  {initialData ? (
                    <>
                      <Edit3 className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                      Update Product
                    </>
                  ) : (
                    <>
                      <Plus className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                      Add Product
                    </>
                  )}
                </Button>
                {onCancel && (
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={onCancel}
                    className="h-12 px-6 border-2 border-gray-300 text-gray-700 hover:border-red-500 hover:bg-red-50 hover:text-red-700 transition-all duration-300 font-medium rounded-xl"
                  >
                    Cancel
                  </Button>
                )}
              </div>

              {/* Form Helper Text */}
              <div className="text-center pt-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 rounded-full border border-blue-200">
                  <Sparkles className="h-3 w-3 text-blue-600" />
                  <p className="text-xs text-blue-700 font-medium">
                    Fields marked with * are required
                  </p>
                </div>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}