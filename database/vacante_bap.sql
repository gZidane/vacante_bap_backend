-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 05-02-2023 a las 21:42:12
-- Versión del servidor: 8.0.32-0ubuntu0.20.04.2
-- Versión de PHP: 7.4.3-4ubuntu2.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `vacante_bap`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tags`
--

CREATE TABLE `tags` (
  `id` int NOT NULL,
  `tag` varchar(50) NOT NULL,
  `task_id` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Volcado de datos para la tabla `tags`
--

INSERT INTO `tags` (`id`, `tag`, `task_id`) VALUES
(1, 'food', '823535717704410591589c817c70c9fb'),
(2, 'sports', '823535717704410591589c817c70c9fb');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tareas`
--

CREATE TABLE `tareas` (
  `id` varchar(32) NOT NULL,
  `title` varchar(100) NOT NULL,
  `status` varchar(50) NOT NULL,
  `delivery_date` varchar(30) NOT NULL,
  `comments` varchar(200) NOT NULL,
  `description` varchar(200) NOT NULL,
  `assigned_to` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Volcado de datos para la tabla `tareas`
--

INSERT INTO `tareas` (`id`, `title`, `status`, `delivery_date`, `comments`, `description`, `assigned_to`) VALUES
('1a2s3e4r5t6y7u', 'Test task 1', 'active', '15/02/2023', 'This is a comment', 'This is a new task to be completed', 'Gabriel Zidane'),
('823535717704410591589c817c70c9fb', 'test 4', 'test 4', '17/02/2023', 'This is another comment', 'This is the description for task 4', 'Gabriel Zidane'),
('c00c818c29f14b0791317e3f8efda41e', 'New title from postman again', 'test', '17/02/2023', 'This is a comment', 'This is the description', 'Gabriel Zidane'),
('de7248dc979b409bb31bca336bc1aa41', 'test 3', 'test 3', '17/02/2023', 'This is another comment', 'This is the description for task 3', 'Gabriel Zidane');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `tags`
--
ALTER TABLE `tags`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `tareas`
--
ALTER TABLE `tareas`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `tags`
--
ALTER TABLE `tags`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
