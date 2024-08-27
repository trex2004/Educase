import { float, mysqlTable, serial, varchar } from "drizzle-orm/mysql-core"

export const school = mysqlTable("Schools", {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 100 }).notNull(),
    address: varchar("address", { length: 250 }).notNull(),
    latitude: float("latitude").notNull(),
    longitude: float("longitude").notNull(),
})

