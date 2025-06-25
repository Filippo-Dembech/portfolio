import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import Header from "../../components/Header";
import { MdEmail } from "react-icons/md";
import { toast, ToastContainer } from "react-toastify";
import HomepageButton from "../../components/HomepageButton";
import Contact from './Contact';
import "react-toastify/dist/ReactToastify.css";


export default function ContactsPage() {
    const notify = (text, type) =>
        toast(text, {
            pauseOnHover: false,
            position: "bottom-center",
            hideProgressBar: true,
            type,
        });

    return (
        <HomepageButton>
            <div className="min-h-[100dvh] bg-orange-50 flex flex-col">
                <Header>My Contacts</Header>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-4">
                    <Contact
                        icon={
                            <BsLinkedin className="text-orange-500 w-10 h-10" />
                        }
                        text="Filippo Dembech"
                        link="https://www.linkedin.com/in/filippo-dembech/"
                    />
                    <Contact
                        icon={
                            <BsGithub className="text-orange-500 w-10 h-10" />
                        }
                        text="My Github Page"
                        link="https://github.com/Filippo-Dembech"
                    />
                    <Contact
                        icon={<MdEmail className="text-orange-500 w-10 h-10" />}
                        text="filippodembechwork@gmail.com"
                        onClick={async () => {
                            try {
                                await navigator.clipboard.writeText(
                                    "filippodembechwork@gmail.com"
                                );
                                notify("Email copied to clipboard", "success");
                            } catch (err) {
                                notify(
                                    "Can't copy email to clipboard",
                                    "error"
                                );
                            }
                        }}
                    />
                    <Contact
                        icon={
                            <BsInstagram className="text-orange-500 w-10 h-10" />
                        }
                        text="breathless_hq"
                        link="https://www.instagram.com/breathless_hq?igsh=cm11Yjh5cDllNDg0"
                    />
                </div>
                <ToastContainer
                    autoClose={1000}
                    position="bottom-center"
                    draggable
                    theme="colored"
                    closeOnClick
                />
            </div>
        </HomepageButton>
    );
}
