delete from team
where id = $1;

select * from team 
where user_id = $2;