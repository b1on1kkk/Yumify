import RegistrationType from "../RegistrationType/RegistrationType";
import SubmitButton from "../SubmitButton/SubmitButton";

interface TWrapper {
  title: string;
  children: React.ReactNode;
  submit_button_title: string;
  link: string;
  before_link_text: string;
  link_text: string;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export default function Wrapper({
  title,
  children,
  submit_button_title,
  link,
  before_link_text,
  link_text,
  onSubmit
}: TWrapper) {
  return (
    <div className="h-full bg-gray-100 flex items-center justify-center flex-col">
      <div className="w-[460px] bg-white border-[1px] shadow-md rounded-md p-10">
        <div>
          <span className="font-bold text-2xl">{title}</span>
        </div>

        <form onSubmit={onSubmit} className="pt-14">
          {children}

          <SubmitButton title={submit_button_title} />
        </form>
      </div>

      <RegistrationType
        link={link}
        before_link_text={before_link_text}
        link_text={link_text}
      />
    </div>
  );
}
