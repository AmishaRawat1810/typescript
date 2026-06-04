import * as z from "@zod/zod";

const Player = z.object({
  username: z
    .string()
    .min(2)
    .regex(/^[a-zA-Z][A-Za-z0-9]*$/),
  xp: z.number().min(0),
});

const result = Player.safeParse({ username: "sa", xp: "1" });
const errors = result.error!.issues;
// const pretty = z.prettifyError(error); doesn't work with z v.4 of jsr zod, have to use npm one.

const colors = z.literal(["a", "b", 1, 2, 3, "1s2"]);
const colorSet = colors.values; //results into a set of values
