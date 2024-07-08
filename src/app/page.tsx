import Image from "next/image";
import Link from "next/link";

import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function HomePage() {
  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-balance text-muted-foreground">
              Esta pestaña no funciona por el momento, es solo de muestra
            </p>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="correo@ejemplo.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Contraseña</Label>
              <Input id="password" type="password" required />
            </div>
            <Button type="submit" className="w-full">
              Login
            </Button>
            <Button variant="outline" className="w-full">
              Login con Google
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            No tienes una cuenta aún?{" "}
            <Link href="/disciplines" className="underline">
              Registrarse
            </Link>
          </div>
          <Link
            href="/disciplines"
            className={buttonVariants({ variant: "secondary" })}
          >
            Ir a disciplinas
          </Link>
        </div>
      </div>
      <div className="hidden bg-muted lg:block">
        <Image
          src="/login-ball-img.webp"
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[0.6]"
        />
      </div>
    </div>
  );
}
