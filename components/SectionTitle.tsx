export interface SectionTitleProps {
    children: string;
}

const SectionTitle = ({ children }: SectionTitleProps) => {
    return (
        <div class="w-fit">
            <h2 class={"text-left text-2xl font-bold mt-4 w-fit"}>{children}</h2>
            {
                //<div class="w-[126px] h-[2px] bg-black dark:bg-white mx-auto mt-0.5 after:w-2 after:h-2 after:bg-black dark:after:bg-white relative after:absolute after:left-1/2 after:top-1/2 after:-translate-y-1/2"></div>
            }
        </div>
    );
};

export default SectionTitle;
