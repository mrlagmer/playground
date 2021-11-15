// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import findWinner from "../../utils/answer"

export default function answerAPI(req, res) {
  res.status(200).json({ answer: findWinner(Number(req.query.n),Number(req.query.t)) })
}
