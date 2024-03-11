import { Bebas_Neue, Inter, Poppins } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "600"],
});

export const bebasNeue = Bebas_Neue({ weight: "400", subsets: ["latin"] });
