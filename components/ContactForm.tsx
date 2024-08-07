"use client";
import { useForm } from "react-hook-form";

import { cn } from "@/utils/utils";
import FieldError from "@/components/FieldError";
import useMessage from "@/hooks/use-message";

const REQUIRED = "This field is required";

type ContactFormType = {
  name: string;
  email: string;
  message: string;
};

function ContactForm() {
  const { isMessage, setIsMessage } = useMessage();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormType>({
    defaultValues: { name: "", email: "", message: "" },
  });

  const onSubmit = (data: ContactFormType) => {
    setIsMessage(true);
    reset();
  };

  return (
    <div className="relative w-full max-w-[27.8125rem]">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-grow flex-col gap-8 pb-[5.4375rem] lg:pb-[5.75rem]">
          <div className="relative">
            <input
              className={cn({
                "!focus:border-error !border-error hover:border-error focus:ring-error active:border-error":
                  errors?.name,
              })}
              type="text"
              placeholder="Name"
              autoComplete="off"
              {...register("name", {
                required: REQUIRED,
                minLength: { value: 2, message: "Minimum 2 letters required" },
              })}
            />
            <FieldError error={errors?.name?.message} />
          </div>
          <div className="relative">
            <input
              className={cn({
                "!focus:border-error !border-error hover:border-error focus:ring-error active:border-error":
                  errors?.email,
              })}
              type="email"
              autoComplete="off"
              placeholder="Email"
              {...register("email", {
                required: REQUIRED,
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Entered value does not match email format",
                },
              })}
            />
            <FieldError error={errors?.email?.message} />
          </div>
          <div className="relative">
            <textarea
              className={cn({
                "!focus:border-error !border-error hover:border-error focus:ring-error active:border-error":
                  errors?.message,
              })}
              placeholder="Message"
              {...register("message", {
                required: REQUIRED,
                minLength: {
                  value: 4,
                  message: "Minimum 4 letters is required",
                },
              })}
            />
            <FieldError error={errors?.message?.message} />
          </div>
          <button className="btn-regular self-end" type="submit">
            Send message
          </button>
        </div>
        {isMessage && (
          <div className="absolute bottom-8 left-0 w-full text-center text-accent transition">
            Message sent successfully!
          </div>
        )}
      </form>
    </div>
  );
}
export default ContactForm;
