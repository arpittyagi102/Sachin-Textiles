import Header from "@/components/Header/Header";

export default function Layout({ children }) {
    return (
        <div className="mx-auto max-w-8xl pt-2">
            <Header />
            {children}
        </div>
    );
}