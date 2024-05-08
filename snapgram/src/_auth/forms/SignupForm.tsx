import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SignupValidation } from "@/lib/validation";
import { z } from "zod";
import Loader from "@/components/shared/Loader";
import { createUserAccount } from "@/lib/appwrite/api";

const SignupForm = () => {
  const { toast } = useToast();
  const isLoading = false;

  // 1. Define your form.
  const form = useForm<z.infer<typeof SignupValidation>>({
    resolver: zodResolver(SignupValidation),
    defaultValues: {
      username: "",
      name: "",
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof SignupValidation>) {
    // Kullanıcı hesabı oluşturmak istiyoruz.
    const newUser = await createUserAccount(values);

    if (!newUser) {
      return toast({
        title: "Giriş başarısız oldu. Lütfen tekrar deneyiniz.",
      });
    }

    // const session = await signInAccount();
  }

  return (
    <Form {...form}>
      <div className="sm:w-420 flex-center flex-col">
        <img src="/assets/images/logo.svg" alt="logo" />
        <h2 className="h3-bold md:h2-bold pt-5 sm:pt-12">
          Yeni bir hesap oluşturun
        </h2>

        <p className="text-light-3 small-medium md:base-regular mt-2">
          Snapgram' i kullanabilmek lütfen detaylarınızı giriniz
        </p>
      </div>

      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-5 w-80 mt-4 "
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Kullanıcı Adı</FormLabel>
              <FormControl>
                <Input type="text" className="shad-input" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>İsminiz</FormLabel>
              <FormControl>
                <Input type="text" className="shad-input" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" className="shad-input" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Kullanıcı Şifresi</FormLabel>
              <FormControl>
                <Input type="password" className="shad-input" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="shad-button_primary">
          {isLoading ? (
            <div className="flex-center gap-2">
              <Loader /> Yükleniyor
            </div>
          ) : (
            "Kayıt Ol"
          )}
        </Button>

        <p className="text-small-regular text-light-2 text-center mt-2">
          Zaten bir hesabınız mı var?
          <Link
            to="/giris-yap"
            className="text-primary-500 text-small-semibold ml-1"
          >
            Giriş Yap
          </Link>
        </p>
      </form>
    </Form>
  );
};

export default SignupForm;
