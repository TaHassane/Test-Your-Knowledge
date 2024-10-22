-- First, add the column as nullable
ALTER TABLE "User" ADD COLUMN "gender" TEXT;

-- Set a default value for existing records (let's set them all to 'male' initially)
UPDATE "User" SET "gender" = 'male' WHERE "gender" IS NULL;

-- Now make the column required
ALTER TABLE "User" ALTER COLUMN "gender" SET NOT NULL;
