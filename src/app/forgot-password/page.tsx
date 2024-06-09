/* eslint-disable react/no-unescaped-entities */
"use client";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { forgotPassword } from "@/lib/pocketbase";
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";

const forgotPasswordSchema = z.object({
  email: z.string().email(),
});

export default function ForgotPassword() {
  const forgotPasswordForm = useForm<z.infer<typeof forgotPasswordSchema>>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const { toast } = useToast();
  const onSubmit = async (data: z.infer<typeof forgotPasswordSchema>) => {
    forgotPassword(data);
    toast({
      title: "Success",
      description: "Sent password reset link",
    });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <Toaster />
      <Card className="w-full max-w-md">
        <Form {...forgotPasswordForm}>
          <form onSubmit={forgotPasswordForm.handleSubmit(onSubmit)}>
            <CardHeader className="space-y-2 text-center">
              <CardTitle className="text-2xl font-bold">
                Forgot Password
              </CardTitle>
              <CardDescription>
                Enter your email address below and we'll send you a link to
                reset your password.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2"></div>
              <div className="space-y-2">
                <FormField
                  control={forgotPasswordForm.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="m@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <Button className="w-full" type="submit">
                Reset Password
              </Button>
            </CardContent>
          </form>
        </Form>
      </Card>
    </div>
  );
}
