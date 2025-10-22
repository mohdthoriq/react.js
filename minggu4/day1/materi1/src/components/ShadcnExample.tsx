import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';


const ShadcnExample = () => {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Buat Proyek Baru</CardTitle>
        <CardDescription>
          Deploy proyek baru Anda hanya dengan satu klik.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Nama Proyek</Label>
              <Input id="name" placeholder="Contoh: proyek-saya" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Framework</Label>
              <Input id="framework" placeholder="Contoh: React" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Batal</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  );
};

export default ShadcnExample;