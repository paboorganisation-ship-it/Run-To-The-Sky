"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { showSuccess } from "@/utils/toast";

interface RegistrationFormProps {
  isOpen: boolean;
  onClose: () => void;
  raceName: string;
}

export function RegistrationForm({ isOpen, onClose, raceName }: RegistrationFormProps) {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici, vous enverriez les données à votre backend ou service d'inscription
    console.log(`Inscription pour ${raceName}: Nom - ${name}, Email - ${email}`);
    showSuccess(`Merci ${name} ! Votre inscription pour ${raceName} a été enregistrée.`);
    setName("");
    setEmail("");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Inscription à la course</DialogTitle>
          <DialogDescription>
            Inscrivez-vous pour la prochaine course : {raceName}.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Nom
            </Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="col-span-3"
              required
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="col-span-3"
              required
            />
          </div>
          <DialogFooter>
            <Button type="submit">S'inscrire</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}