"use client";
import { useForm } from "react-hook-form";

type ContactFormType = {
  name: string;
  email: string;
  message: string;
};

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormType>({
    defaultValues: { name: "", email: "", message: "" },
  });

  const onSubmit = (data: ContactFormType) => {
    console.log(data);
  };

  return (
    <div className="w-full max-w-[27.8125rem]">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-grow flex-col gap-8 pb-[5.4375rem] lg:pb-[5.75rem]">
          <input type="text" placeholder="Name" {...register("name")} />
          <input type="email" placeholder="Email" {...register("email")} />
          <textarea placeholder="Message" {...register("message")}></textarea>
          <button className="btn-regular self-end" type="submit">
            Send message
          </button>
        </div>
      </form>
    </div>
  );
}
export default ContactForm;
