import { cryptolist } from "@/data/cryptodata";

export default function handler(req, res) {
  res.status(200).json(cryptolist);
}
