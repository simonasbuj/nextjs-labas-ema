CREATE TABLE "answers" (
	"id" serial PRIMARY KEY NOT NULL,
	"ip" text NOT NULL,
	"answer" text DEFAULT 'taip' NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
