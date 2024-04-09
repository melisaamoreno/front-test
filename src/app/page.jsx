import { Navbar } from "./components/Navbar";
import { BottomBar } from "./components/BottomBar";
import { BrewingList } from "./brewing";
import { CitiesList } from "./cities";

export default function Home() {
  return (
    <>
      <Navbar />

      <BrewingList />
      <CitiesList />

      <BottomBar />
    </>
  );
}
