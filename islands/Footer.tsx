import Container from "../components/Container.tsx";

const Footer = () => {
    return (
        <footer class="w-full border-t-2 bg-black">
            <Container className="relative">
                <a href="https://fresh.deno.dev" class="absolute top-1/2 -translate-y-1/2">
                    <img
                        width="157"
                        height="29"
                        src="https://fresh.deno.dev/fresh-badge-dark.svg"
                        alt="Made with Fresh"
                    />
                </a>
                <div class="py-3 mx-auto flex justify-center">
                    <a
                        href="mailto:c.gillet@ik.me"
                        class="text-center underline font-bold text-sm text-white"
                    >
                        constant.gillet - c.gillet@ik.me
                    </a>
                </div>
            </Container>
        </footer>
    );
};
export default Footer;
