import { boolean, decimal, index, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { CompanyTable } from "../../../../Company/infra/database/schema/companies-schema.js";

export const CollaboratorsTable =pgTable("collaborators",{
  id: uuid("id").primaryKey().defaultRandom(),
  companyId: uuid("company_id").references(() => CompanyTable.id, {onDelete: "cascade"}).notNull(),

  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),

  specialty: text("specialty").notNull(),

  comissionPercentage: decimal("comission_percentage", {precision: 5, scale: 2}).default("0.00").notNull(),

  isActive: boolean("is_active").default(true).notNull(),

  createdAt: timestamp("created_at", {withTimezone: true}).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", {withTimezone: true}).defaultNow().notNull(),
}, (table) => {
  return {
     companyIdx: index("collaborators_company_idx").on(table.companyId),
    companyEmailUniqueIdx: index("collaborators_company_email_idx").on(table.companyId, table.email),
  };
}
)