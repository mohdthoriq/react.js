import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CheckCircle2Icon } from "lucide-react"
import AvatarDemo from "./Avatar"

export function CardDemo() {
  const [isEditing, setIsEditing] = useState(false)
  const [showAlert, setShowAlert] = useState(false)
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    bio: "Fullstack Developer | Coffee addict ☕",
  })
  const [tempProfile, setTempProfile] = useState(profile)

  const handleEdit = () => {
    setTempProfile(profile)
    setIsEditing(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTempProfile({ ...tempProfile, [e.target.name]: e.target.value })
  }

  const handleSave = () => {
    setProfile(tempProfile)
    setIsEditing(false)
    setShowAlert(true)
    setTimeout(() => setShowAlert(false), 3000) // alert ilang otomatis 3 detik
  }

  return (
    <div className="w-full max-w-sm space-y-4">
      <Card className="shadow-lg">
        <CardHeader>
          <AvatarDemo/>
          <CardTitle>My Profile</CardTitle>
          <CardDescription>
            {isEditing
              ? "Edit your profile details below"
              : "View your current profile"}
          </CardDescription>
        </CardHeader>

        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                value={isEditing ? tempProfile.name : profile.name}
                onChange={handleChange}
                disabled={!isEditing}
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                value={isEditing ? tempProfile.email : profile.email}
                onChange={handleChange}
                disabled={!isEditing}
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="bio">Bio</Label>
              <Input
                id="bio"
                name="bio"
                value={isEditing ? tempProfile.bio : profile.bio}
                onChange={handleChange}
                disabled={!isEditing}
              />
            </div>
          </div>
        </CardContent>

        <CardFooter className="flex justify-between">
          {isEditing ? (
            <>
              <Button onClick={handleSave} className="w-[48%]">
                Save
              </Button>
              <Button
                variant="outline"
                onClick={() => setIsEditing(false)}
                className="w-[48%]"
              >
                Cancel
              </Button>
            </>
          ) : (
            <Button onClick={handleEdit} className="w-full">
              Edit Profile
            </Button>
          )}
        </CardFooter>
      </Card>

      {/* ALERT shadcn muncul pas save */}
      {showAlert && (
        <Alert className="border-green-500/40 bg-green-50 text-green-800 dark:bg-green-900/20 dark:text-green-200">
          <CheckCircle2Icon className="h-5 w-5" />
          <AlertTitle>Success!</AlertTitle>
          <AlertDescription>
            Your profile has been updated successfully ✅
          </AlertDescription>
        </Alert>
      )}
    </div>
  )
}
