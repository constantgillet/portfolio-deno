import Container from "./Container.tsx";

export default function Header() {
    return (
        <header class="fixed bg-black w-full border-b-2 z-50">
            <Container className="flex justify-between">
                <a
                    class="border-r border-r-2 py-6 w-[206px] flex justify-center items-center"
                    href="/"
                    title="Homepage"
                >
                    <img src="/images/logo.png" width={48} height={42} alt="Logo" />
                </a>
                {/**
                     * 
                    <div class="flex items-center">
                    <div class="cursor-pointer">
                        <div class="border-t-2 w-[33px] my-2"></div>
                        <div class="border-t-2 w-[33px] my-2"></div>
                        <div class="border-t-2 w-[33px] my-2"></div>
                    </div>
                </div>
                     * 
                     */}
                <div class="flex items-center text-white space-x-6 uppercase font-bold text-sm">
                    <a
                        href="/#articles"
                        title="My articles"
                        class="opacity-70 hover:opacity-100 transition-all ml-6"
                    >
                        Articles
                    </a>
                    <a
                        href="/#projects"
                        title="My projects"
                        class="opacity-70 hover:opacity-100 transition-all"
                    >
                        Projects
                    </a>
                    <a
                        href="mailto:c.gillet@ik.me"
                        title="Contact me"
                        class="opacity-70 hover:opacity-100 transition-all"
                    >
                        Contact me
                    </a>
                </div>
            </Container>
        </header>
    );
}
