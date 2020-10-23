--get reviews
select * from sdc.reviews where product_id = 1 order by helpfulness desc limit 100

--get actual subqieries!
select product_id as id, 
(select  group_concat(c.url) from sdc.reviews_photos c
where c.review_id = a.id) as photos 
from sdc.reviews a
where a.product_id = 2 order by a.helpfulness desc limit 100

