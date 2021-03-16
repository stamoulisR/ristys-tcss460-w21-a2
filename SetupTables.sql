DROP TABLE IF EXISTS Customers CASCADE;
CREATE TABLE Customers
(
    CustomerID SERIAL PRIMARY KEY,
    Email VARCHAR(255) NOT NULL,
    Password VARCHAR(255) NOT NULL,
    SALT VARCHAR(255),
    Verification INT DEFAULT 0
);

DROP TABLE IF EXISTS Orders CASCADE;
CREATE TABLE Orders
(
    OrderID SERIAL PRIMARY KEY,
    Contents VARCHAR(255)
);

DROP TABLE IF EXISTS Customers_Favorites CASCADE;
CREATE TABLE Customers_Favorites
(
    CustomerID SERIAL,
    OrderID SERIAL,
    CONSTRAINT Customers_FavoritesPK PRIMARY KEY (CustomerID, OrderID),
    CONSTRAINT Customers_FavoritesFK FOREIGN KEY (CustomerID) REFERENCES Customers (CustomerID),
    CONSTRAINT Customers_Favorites_OrderFK FOREIGN KEY (OrderID) REFERENCES Orders (OrderID)
);
