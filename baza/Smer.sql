SELECT * FROM smer;

SET IDENTITY_INSERT [dbo].[smer] ON
GO
INSERT INTO [dbo].[smer] ( [id_smera], [id_univerziteta], [naziv] )
VALUES ( 1, 1, N'Аутомобилско инжењерство')
GO

INSERT INTO smer(id_smera, id_univerziteta, naziv)
VALUES (2, 1, N'Биоинжењеринг');

INSERT INTO smer(id_smera, id_univerziteta, naziv)
VALUES (3, 1, N'Војноиндустријско инжењерство');

INSERT INTO smer(id_smera, id_univerziteta, naziv)
VALUES (4, 1, N'Електротехника и рачунарство');

INSERT INTO smer(id_smera, id_univerziteta, naziv)
VALUES (5, 1, N'Индустријско инжењерство - Пословни информациони системи');

INSERT INTO smer(id_smera, id_univerziteta, naziv)
VALUES (6, 1, N'Инжењерство заштите животне средине');

INSERT INTO smer(id_smera, id_univerziteta, naziv)
VALUES (7, 1, N'Машинско инжењерство');

INSERT INTO smer(id_smera, id_univerziteta, naziv)
VALUES (8, 1, N'Пословни информациони системи');

INSERT INTO smer(id_smera, id_univerziteta, naziv)
VALUES (9, 1, N'Рачунарска техника и софтверско инжењерство');

INSERT INTO smer(id_smera, id_univerziteta, naziv)
VALUES (10, 1, N'Урбано инжењерство');


SET IDENTITY_INSERT [dbo].[smer] OFF