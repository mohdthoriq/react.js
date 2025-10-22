import { useState } from "react"
import { Moon, Sun, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { useTheme } from "@/components/ThemeProvider"

export function ModeToggle() {
  const { setTheme } = useTheme()
  const [alertMsg, setAlertMsg] = useState<string | null>(null)

  const handleThemeChange = (mode: "light" | "dark" | "system") => {
    setTheme(mode)
    setAlertMsg(`Theme changed to ${mode}! 🎉`)

    // biar alert ilang sendiri setelah 2 detik
    setTimeout(() => setAlertMsg(null), 2000)
  }

  return (
    <div className="relative">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon">
            <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => handleThemeChange("light")}>
            Light
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleThemeChange("dark")}>
            Dark
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleThemeChange("system")}>
            System
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {alertMsg && (
        <div className="absolute top-12 right-0 animate-in fade-in slide-in-from-top-4">
          <Alert className="w-56">
            <CheckCircle2 className="h-4 w-4" />
            <AlertTitle>Success</AlertTitle>
            <AlertDescription>{alertMsg}</AlertDescription>
          </Alert>
        </div>
      )}
    </div>
  )
}
