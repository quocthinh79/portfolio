import { Button } from "@/components/MantineComponent";

export interface HomeProps {}

export default function Home(props: HomeProps) {
  return (
    <div>
      <Button variant="filled">This is home page</Button>
    </div>
  );
}
