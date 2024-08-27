CREATE TABLE `Schools` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`name` varchar(100) NOT NULL,
	`address` varchar(250) NOT NULL,
	CONSTRAINT `Schools_id` PRIMARY KEY(`id`)
);
