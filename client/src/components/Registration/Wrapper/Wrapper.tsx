import SubmitButton from "../SubmitButton/SubmitButton";
import RegistrationType from "../RegistrationType/RegistrationType";

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
    <main className="h-screen relative bg-[#ffffff]">
      <div className="flex flex-col absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[360px]">
        <div className="bg-[#f8f9f0] border-[1px] shadow-md rounded-md p-7">
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
    </main>
  );
}
