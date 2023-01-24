SELECT * FROM univerzitet;


SET IDENTITY_INSERT [dbo].[univerzitet] ON
GO
INSERT INTO [dbo].[univerzitet] ( [id_univerziteta], [naziv] )
VALUES ( 1, N'Универзитет у Крагујевцу')
GO

SET IDENTITY_INSERT [dbo].[univerzitet] OFF
