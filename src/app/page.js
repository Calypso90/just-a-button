import Button from "./components/button.js";

export default function Home() {
  return (
    <div class="flex justify-center mt-10 gap-2">
      <Button text={"Join League"} type={"primary"} />
      <Button text={"Leave League"} type={"secondary"} />
    </div>
  );
}
