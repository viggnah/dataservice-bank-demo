create database BankInfo;
use BankInfo;

create table account(
    account_id varchar(20) primary key,
    account_name varchar(100) not null,
    account_number varchar(100) not null,
    account_type varchar(100) not null,
    account_balance double not null
);
insert into account(account_id, account_name, account_number, account_type, account_balance) values('1', 'John', '123456789', 'Savings', 1000030.48);

create table transaction(
    transaction_id varchar(20) primary key,
    account_id varchar(20) not null,
    transaction_type varchar(100) not null,
    transaction_amount double not null,
    transaction_date date not null,
    merchant_id int,
    comment varchar(100),
    foreign key (account_id) references account(account_id)
);
insert into transaction(transaction_id, account_id, transaction_type, transaction_amount, transaction_date, merchant_id, comment) values('1', '1', 'debit', 202000.05, '2020-01-01', 1, 'Amazon');
insert into transaction(transaction_id, account_id, transaction_type, transaction_amount, transaction_date, merchant_id, comment) values('2', '1', 'debit', 30050.30, '2020-01-01', 3, 'Uber');
insert into transaction(transaction_id, account_id, transaction_type, transaction_amount, transaction_date, merchant_id, comment) values('3', '1', 'debit', 7990.00, '2020-01-01', 7, 'MPesa');
insert into transaction(transaction_id, account_id, transaction_type, transaction_amount, transaction_date, merchant_id, comment) values('5', '1', 'credit', 3005.00, '2020-01-01', null, 'Refund');

--  MI queries
-- select account_id, account_name, account_number, account_type, account_balance from account where account_id = :account_id;
-- {
--     "account_data": {
--         "account_id": "$account_id",
--         "account_name": "$account_name",
--         "account_number": "$account_number",
--         "account_type": "$account_type",
--         "account_balance": "$account_balance"
--     }
-- }

-- select transaction_id, account_id, transaction_type, transaction_amount, transaction_date, merchant_id, comment from transaction where account_id = :account_id;
-- {
--     "transactions": {
--         "transaction": [
--             {
--                 "transaction_id": "$transaction_id",
--                 "account_id": "$account_id",
--                 "transaction_type": "$transaction_type",
--                 "transaction_amount": "$transaction_amount",
--                 "transaction_date": "$transaction_date",
--                 "merchant_id": "$merchant_id",
--                 "comment": "$comment"
--             }
--         ]
--     }
-- }
