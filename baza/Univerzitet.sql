INSERT INTO table_name (column1, column2, column3, ...)
VALUES (value1, value2, value3, ...);

Аутомобилско инжењерство
Биоинжењеринг
Војноиндустријско инжењерство
Електротехника и рачунарство
Индустријско инжењерство - Пословни информациони системи
Инжењерски менаџмнет
Инжењерство заштите животне средине
Машинско инжењерство
Пословни информациони системи
Рачунарска техника и софтверско инжењерство
Урбано инжењерство


SELECT * FROM univerzitet;


SET IDENTITY_INSERT [dbo].[univerzitet] ON
GO
INSERT INTO [dbo].[univerzitet] ( [id_univerziteta], [naziv] )
VALUES ( 1, N'Универзитет у Крагујевцу')
GO

SET IDENTITY_INSERT [dbo].[univerzitet] OFF