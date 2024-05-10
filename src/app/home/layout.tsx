import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const queryClient = new QueryClient();

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      {children}
      <Footer />
    </QueryClientProvider>
  );
}
