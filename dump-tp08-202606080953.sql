--
-- PostgreSQL database dump
--

-- Dumped from database version 16.2
-- Dumped by pg_dump version 16.2

-- Started on 2026-06-08 09:53:40

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 215 (class 1259 OID 16399)
-- Name: provinces; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.provinces (
    nombre character varying NOT NULL,
    capital character varying NOT NULL,
    latitud character varying NOT NULL,
    longitud character varying NOT NULL,
    id integer NOT NULL
);


ALTER TABLE public.provinces OWNER TO postgres;

--
-- TOC entry 216 (class 1259 OID 16404)
-- Name: provinces_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.provinces_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.provinces_id_seq OWNER TO postgres;

--
-- TOC entry 4787 (class 0 OID 0)
-- Dependencies: 216
-- Name: provinces_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.provinces_id_seq OWNED BY public.provinces.id;


--
-- TOC entry 4634 (class 2604 OID 16405)
-- Name: provinces id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.provinces ALTER COLUMN id SET DEFAULT nextval('public.provinces_id_seq'::regclass);


--
-- TOC entry 4780 (class 0 OID 16399)
-- Dependencies: 215
-- Data for Name: provinces; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.provinces (nombre, capital, latitud, longitud, id) FROM stdin;
Buenos Aires	La Plata	-34.9214	-57.9544	1
Catamarca	San Fernando del Valle de Catamarca	-28.4696	-65.7852	2
Chaco	Resistencia	-27.4514	-58.9867	3
Chubut	Rawson	-43.3002	-65.1023	4
Córdoba	Córdoba	-31.4201	-64.1888	5
Corrientes	Corrientes	-27.4692	-58.8306	6
Entre Ríos	Paraná	-31.7319	-60.5238	7
Formosa	Formosa	-26.1775	-58.1781	8
Jujuy	San Salvador de Jujuy	-24.1858	-65.2995	9
La Pampa	Santa Rosa	-36.6203	-64.2906	10
La Rioja	La Rioja	-29.4131	-66.8558	11
Mendoza	Mendoza	-32.8895	-68.8458	12
Misiones	Posadas	-27.3671	-55.8961	13
Neuquén	Neuquén	-38.9516	-68.0591	14
Río Negro	Viedma	-40.8135	-62.9967	15
Salta	Salta	-24.7829	-65.4232	16
San Juan	San Juan	-31.5375	-68.5364	17
San Luis	San Luis	-33.2950	-66.3356	18
Santa Cruz	Río Gallegos	-51.6230	-69.2168	19
Santa Fe	Santa Fe	-31.6333	-60.7000	20
Santiago del Estero	Santiago del Estero	-27.7951	-64.2615	21
Tierra del Fuego	Ushuaia	-54.8019	-68.3030	22
Tucumán	San Miguel de Tucumán	-26.8083	-65.2176	23
Buens Aires	La Plata	-34.9214	-57.9544	24
Buens Aires	La Plata	-34.9214	-57.9544	25
Buens Aires	La Plata	-34.9214	-57.9544	26
Buens Aires	La Plata	-34.9214	-57.9544	27
Buens Aires	La Plata	-34.9214	-57.9544	28
Buens Aires	La Plata	-34.9214	-57.9544	29
Buens Aires	La Plata	-34.9214	-57.9544	30
Buens Aires	La Plata	-34.9214	-57.9544	31
Buens Aires	La Plata	-34.9214	-57.9544	32
Buens Aires	La Plata	-34.9214	-57.9544	33
Buens Aires	delfi	-34.9214	-57.9544	34
\.


--
-- TOC entry 4788 (class 0 OID 0)
-- Dependencies: 216
-- Name: provinces_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.provinces_id_seq', 35, true);


--
-- TOC entry 4636 (class 2606 OID 16407)
-- Name: provinces provinces_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.provinces
    ADD CONSTRAINT provinces_pkey PRIMARY KEY (id);


-- Completed on 2026-06-08 09:53:40

--
-- PostgreSQL database dump complete
--

