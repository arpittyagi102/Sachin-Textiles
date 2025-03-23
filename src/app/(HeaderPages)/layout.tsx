import Header from "@/components/Header/Header";

export default function Layout({ children }) {
    return (
        <div className="mx-auto max-w-7xl px-2 md:px-4 pt-2">
            <Header />
            {children}
        </div>
    );
}