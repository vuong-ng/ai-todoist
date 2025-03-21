CREATE TABLE "todos" (
	"id" serial PRIMARY KEY NOT NULL,
	"description" text NOT NULL,
	"topic" varchar(255),
	"userId" integer NOT NULL,
	"status" varchar(255),
	"editor_state" text,
	"created_at" timestamp DEFAULT now() NOT NULL
);
