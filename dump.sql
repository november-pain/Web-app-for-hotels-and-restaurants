--
-- PostgreSQL database dump
--

-- Dumped from database version 12.5
-- Dumped by pg_dump version 13.2

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
-- Name: auth_group; Type: TABLE; Schema: public; Owner: ficha_master
--

CREATE TABLE public.auth_group (
    id integer NOT NULL,
    name character varying(150) NOT NULL
);


ALTER TABLE public.auth_group OWNER TO ficha_master;

--
-- Name: auth_group_id_seq; Type: SEQUENCE; Schema: public; Owner: ficha_master
--

CREATE SEQUENCE public.auth_group_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.auth_group_id_seq OWNER TO ficha_master;

--
-- Name: auth_group_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: ficha_master
--

ALTER SEQUENCE public.auth_group_id_seq OWNED BY public.auth_group.id;


--
-- Name: auth_group_permissions; Type: TABLE; Schema: public; Owner: ficha_master
--

CREATE TABLE public.auth_group_permissions (
    id integer NOT NULL,
    group_id integer NOT NULL,
    permission_id integer NOT NULL
);


ALTER TABLE public.auth_group_permissions OWNER TO ficha_master;

--
-- Name: auth_group_permissions_id_seq; Type: SEQUENCE; Schema: public; Owner: ficha_master
--

CREATE SEQUENCE public.auth_group_permissions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.auth_group_permissions_id_seq OWNER TO ficha_master;

--
-- Name: auth_group_permissions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: ficha_master
--

ALTER SEQUENCE public.auth_group_permissions_id_seq OWNED BY public.auth_group_permissions.id;


--
-- Name: auth_permission; Type: TABLE; Schema: public; Owner: ficha_master
--

CREATE TABLE public.auth_permission (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    content_type_id integer NOT NULL,
    codename character varying(100) NOT NULL
);


ALTER TABLE public.auth_permission OWNER TO ficha_master;

--
-- Name: auth_permission_id_seq; Type: SEQUENCE; Schema: public; Owner: ficha_master
--

CREATE SEQUENCE public.auth_permission_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.auth_permission_id_seq OWNER TO ficha_master;

--
-- Name: auth_permission_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: ficha_master
--

ALTER SEQUENCE public.auth_permission_id_seq OWNED BY public.auth_permission.id;


--
-- Name: auth_user; Type: TABLE; Schema: public; Owner: ficha_master
--

CREATE TABLE public.auth_user (
    id integer NOT NULL,
    password character varying(128) NOT NULL,
    last_login timestamp with time zone,
    is_superuser boolean NOT NULL,
    username character varying(150) NOT NULL,
    first_name character varying(150) NOT NULL,
    last_name character varying(150) NOT NULL,
    email character varying(254) NOT NULL,
    is_staff boolean NOT NULL,
    is_active boolean NOT NULL,
    date_joined timestamp with time zone NOT NULL
);


ALTER TABLE public.auth_user OWNER TO ficha_master;

--
-- Name: auth_user_groups; Type: TABLE; Schema: public; Owner: ficha_master
--

CREATE TABLE public.auth_user_groups (
    id integer NOT NULL,
    user_id integer NOT NULL,
    group_id integer NOT NULL
);


ALTER TABLE public.auth_user_groups OWNER TO ficha_master;

--
-- Name: auth_user_groups_id_seq; Type: SEQUENCE; Schema: public; Owner: ficha_master
--

CREATE SEQUENCE public.auth_user_groups_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.auth_user_groups_id_seq OWNER TO ficha_master;

--
-- Name: auth_user_groups_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: ficha_master
--

ALTER SEQUENCE public.auth_user_groups_id_seq OWNED BY public.auth_user_groups.id;


--
-- Name: auth_user_id_seq; Type: SEQUENCE; Schema: public; Owner: ficha_master
--

CREATE SEQUENCE public.auth_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.auth_user_id_seq OWNER TO ficha_master;

--
-- Name: auth_user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: ficha_master
--

ALTER SEQUENCE public.auth_user_id_seq OWNED BY public.auth_user.id;


--
-- Name: auth_user_user_permissions; Type: TABLE; Schema: public; Owner: ficha_master
--

CREATE TABLE public.auth_user_user_permissions (
    id integer NOT NULL,
    user_id integer NOT NULL,
    permission_id integer NOT NULL
);


ALTER TABLE public.auth_user_user_permissions OWNER TO ficha_master;

--
-- Name: auth_user_user_permissions_id_seq; Type: SEQUENCE; Schema: public; Owner: ficha_master
--

CREATE SEQUENCE public.auth_user_user_permissions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.auth_user_user_permissions_id_seq OWNER TO ficha_master;

--
-- Name: auth_user_user_permissions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: ficha_master
--

ALTER SEQUENCE public.auth_user_user_permissions_id_seq OWNED BY public.auth_user_user_permissions.id;


--
-- Name: django_admin_log; Type: TABLE; Schema: public; Owner: ficha_master
--

CREATE TABLE public.django_admin_log (
    id integer NOT NULL,
    action_time timestamp with time zone NOT NULL,
    object_id text,
    object_repr character varying(200) NOT NULL,
    action_flag smallint NOT NULL,
    change_message text NOT NULL,
    content_type_id integer,
    user_id integer NOT NULL,
    CONSTRAINT django_admin_log_action_flag_check CHECK ((action_flag >= 0))
);


ALTER TABLE public.django_admin_log OWNER TO ficha_master;

--
-- Name: django_admin_log_id_seq; Type: SEQUENCE; Schema: public; Owner: ficha_master
--

CREATE SEQUENCE public.django_admin_log_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.django_admin_log_id_seq OWNER TO ficha_master;

--
-- Name: django_admin_log_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: ficha_master
--

ALTER SEQUENCE public.django_admin_log_id_seq OWNED BY public.django_admin_log.id;


--
-- Name: django_content_type; Type: TABLE; Schema: public; Owner: ficha_master
--

CREATE TABLE public.django_content_type (
    id integer NOT NULL,
    app_label character varying(100) NOT NULL,
    model character varying(100) NOT NULL
);


ALTER TABLE public.django_content_type OWNER TO ficha_master;

--
-- Name: django_content_type_id_seq; Type: SEQUENCE; Schema: public; Owner: ficha_master
--

CREATE SEQUENCE public.django_content_type_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.django_content_type_id_seq OWNER TO ficha_master;

--
-- Name: django_content_type_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: ficha_master
--

ALTER SEQUENCE public.django_content_type_id_seq OWNED BY public.django_content_type.id;


--
-- Name: django_migrations; Type: TABLE; Schema: public; Owner: ficha_master
--

CREATE TABLE public.django_migrations (
    id integer NOT NULL,
    app character varying(255) NOT NULL,
    name character varying(255) NOT NULL,
    applied timestamp with time zone NOT NULL
);


ALTER TABLE public.django_migrations OWNER TO ficha_master;

--
-- Name: django_migrations_id_seq; Type: SEQUENCE; Schema: public; Owner: ficha_master
--

CREATE SEQUENCE public.django_migrations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.django_migrations_id_seq OWNER TO ficha_master;

--
-- Name: django_migrations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: ficha_master
--

ALTER SEQUENCE public.django_migrations_id_seq OWNED BY public.django_migrations.id;


--
-- Name: django_session; Type: TABLE; Schema: public; Owner: ficha_master
--

CREATE TABLE public.django_session (
    session_key character varying(40) NOT NULL,
    session_data text NOT NULL,
    expire_date timestamp with time zone NOT NULL
);


ALTER TABLE public.django_session OWNER TO ficha_master;

--
-- Name: hot_res_app_category; Type: TABLE; Schema: public; Owner: ficha_master
--

CREATE TABLE public.hot_res_app_category (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    image character varying(100) NOT NULL
);


ALTER TABLE public.hot_res_app_category OWNER TO ficha_master;

--
-- Name: hot_res_app_categories_id_seq; Type: SEQUENCE; Schema: public; Owner: ficha_master
--

CREATE SEQUENCE public.hot_res_app_categories_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.hot_res_app_categories_id_seq OWNER TO ficha_master;

--
-- Name: hot_res_app_categories_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: ficha_master
--

ALTER SEQUENCE public.hot_res_app_categories_id_seq OWNED BY public.hot_res_app_category.id;


--
-- Name: hot_res_app_completed_order; Type: TABLE; Schema: public; Owner: ficha_master
--

CREATE TABLE public.hot_res_app_completed_order (
    id integer NOT NULL,
    "order" jsonb NOT NULL,
    date_time_started timestamp with time zone NOT NULL,
    date_time_completed timestamp with time zone NOT NULL,
    place character varying(31) NOT NULL
);


ALTER TABLE public.hot_res_app_completed_order OWNER TO ficha_master;

--
-- Name: hot_res_app_completed_order_id_seq; Type: SEQUENCE; Schema: public; Owner: ficha_master
--

CREATE SEQUENCE public.hot_res_app_completed_order_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.hot_res_app_completed_order_id_seq OWNER TO ficha_master;

--
-- Name: hot_res_app_completed_order_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: ficha_master
--

ALTER SEQUENCE public.hot_res_app_completed_order_id_seq OWNED BY public.hot_res_app_completed_order.id;


--
-- Name: hot_res_app_menu; Type: TABLE; Schema: public; Owner: ficha_master
--

CREATE TABLE public.hot_res_app_menu (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    description text NOT NULL,
    price numeric(10,2) NOT NULL,
    image character varying(100) NOT NULL,
    category_id integer NOT NULL,
    is_available boolean NOT NULL
);


ALTER TABLE public.hot_res_app_menu OWNER TO ficha_master;

--
-- Name: hot_res_app_menu_id_seq; Type: SEQUENCE; Schema: public; Owner: ficha_master
--

CREATE SEQUENCE public.hot_res_app_menu_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.hot_res_app_menu_id_seq OWNER TO ficha_master;

--
-- Name: hot_res_app_menu_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: ficha_master
--

ALTER SEQUENCE public.hot_res_app_menu_id_seq OWNED BY public.hot_res_app_menu.id;


--
-- Name: hot_res_app_order; Type: TABLE; Schema: public; Owner: ficha_master
--

CREATE TABLE public.hot_res_app_order (
    id integer NOT NULL,
    "order" jsonb NOT NULL,
    date_time timestamp with time zone NOT NULL,
    place character varying(31) NOT NULL
);


ALTER TABLE public.hot_res_app_order OWNER TO ficha_master;

--
-- Name: hot_res_app_order_id_seq; Type: SEQUENCE; Schema: public; Owner: ficha_master
--

CREATE SEQUENCE public.hot_res_app_order_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.hot_res_app_order_id_seq OWNER TO ficha_master;

--
-- Name: hot_res_app_order_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: ficha_master
--

ALTER SEQUENCE public.hot_res_app_order_id_seq OWNED BY public.hot_res_app_order.id;


--
-- Name: hot_res_app_place; Type: TABLE; Schema: public; Owner: ficha_master
--

CREATE TABLE public.hot_res_app_place (
    id integer NOT NULL,
    name character varying(31) NOT NULL,
    qr_code character varying(100) NOT NULL,
    url character varying(200) NOT NULL
);


ALTER TABLE public.hot_res_app_place OWNER TO ficha_master;

--
-- Name: hot_res_app_places_id_seq; Type: SEQUENCE; Schema: public; Owner: ficha_master
--

CREATE SEQUENCE public.hot_res_app_places_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.hot_res_app_places_id_seq OWNER TO ficha_master;

--
-- Name: hot_res_app_places_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: ficha_master
--

ALTER SEQUENCE public.hot_res_app_places_id_seq OWNED BY public.hot_res_app_place.id;


--
-- Name: hot_res_app_waitercall; Type: TABLE; Schema: public; Owner: ficha_master
--

CREATE TABLE public.hot_res_app_waitercall (
    id integer NOT NULL,
    place character varying(31) NOT NULL,
    date_time timestamp with time zone NOT NULL
);


ALTER TABLE public.hot_res_app_waitercall OWNER TO ficha_master;

--
-- Name: hot_res_app_waitercall_id_seq; Type: SEQUENCE; Schema: public; Owner: ficha_master
--

CREATE SEQUENCE public.hot_res_app_waitercall_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.hot_res_app_waitercall_id_seq OWNER TO ficha_master;

--
-- Name: hot_res_app_waitercall_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: ficha_master
--

ALTER SEQUENCE public.hot_res_app_waitercall_id_seq OWNED BY public.hot_res_app_waitercall.id;


--
-- Name: auth_group id; Type: DEFAULT; Schema: public; Owner: ficha_master
--

ALTER TABLE ONLY public.auth_group ALTER COLUMN id SET DEFAULT nextval('public.auth_group_id_seq'::regclass);


--
-- Name: auth_group_permissions id; Type: DEFAULT; Schema: public; Owner: ficha_master
--

ALTER TABLE ONLY public.auth_group_permissions ALTER COLUMN id SET DEFAULT nextval('public.auth_group_permissions_id_seq'::regclass);


--
-- Name: auth_permission id; Type: DEFAULT; Schema: public; Owner: ficha_master
--

ALTER TABLE ONLY public.auth_permission ALTER COLUMN id SET DEFAULT nextval('public.auth_permission_id_seq'::regclass);


--
-- Name: auth_user id; Type: DEFAULT; Schema: public; Owner: ficha_master
--

ALTER TABLE ONLY public.auth_user ALTER COLUMN id SET DEFAULT nextval('public.auth_user_id_seq'::regclass);


--
-- Name: auth_user_groups id; Type: DEFAULT; Schema: public; Owner: ficha_master
--

ALTER TABLE ONLY public.auth_user_groups ALTER COLUMN id SET DEFAULT nextval('public.auth_user_groups_id_seq'::regclass);


--
-- Name: auth_user_user_permissions id; Type: DEFAULT; Schema: public; Owner: ficha_master
--

ALTER TABLE ONLY public.auth_user_user_permissions ALTER COLUMN id SET DEFAULT nextval('public.auth_user_user_permissions_id_seq'::regclass);


--
-- Name: django_admin_log id; Type: DEFAULT; Schema: public; Owner: ficha_master
--

ALTER TABLE ONLY public.django_admin_log ALTER COLUMN id SET DEFAULT nextval('public.django_admin_log_id_seq'::regclass);


--
-- Name: django_content_type id; Type: DEFAULT; Schema: public; Owner: ficha_master
--

ALTER TABLE ONLY public.django_content_type ALTER COLUMN id SET DEFAULT nextval('public.django_content_type_id_seq'::regclass);


--
-- Name: django_migrations id; Type: DEFAULT; Schema: public; Owner: ficha_master
--

ALTER TABLE ONLY public.django_migrations ALTER COLUMN id SET DEFAULT nextval('public.django_migrations_id_seq'::regclass);


--
-- Name: hot_res_app_category id; Type: DEFAULT; Schema: public; Owner: ficha_master
--

ALTER TABLE ONLY public.hot_res_app_category ALTER COLUMN id SET DEFAULT nextval('public.hot_res_app_categories_id_seq'::regclass);


--
-- Name: hot_res_app_completed_order id; Type: DEFAULT; Schema: public; Owner: ficha_master
--

ALTER TABLE ONLY public.hot_res_app_completed_order ALTER COLUMN id SET DEFAULT nextval('public.hot_res_app_completed_order_id_seq'::regclass);


--
-- Name: hot_res_app_menu id; Type: DEFAULT; Schema: public; Owner: ficha_master
--

ALTER TABLE ONLY public.hot_res_app_menu ALTER COLUMN id SET DEFAULT nextval('public.hot_res_app_menu_id_seq'::regclass);


--
-- Name: hot_res_app_order id; Type: DEFAULT; Schema: public; Owner: ficha_master
--

ALTER TABLE ONLY public.hot_res_app_order ALTER COLUMN id SET DEFAULT nextval('public.hot_res_app_order_id_seq'::regclass);


--
-- Name: hot_res_app_place id; Type: DEFAULT; Schema: public; Owner: ficha_master
--

ALTER TABLE ONLY public.hot_res_app_place ALTER COLUMN id SET DEFAULT nextval('public.hot_res_app_places_id_seq'::regclass);


--
-- Name: hot_res_app_waitercall id; Type: DEFAULT; Schema: public; Owner: ficha_master
--

ALTER TABLE ONLY public.hot_res_app_waitercall ALTER COLUMN id SET DEFAULT nextval('public.hot_res_app_waitercall_id_seq'::regclass);


--
-- Data for Name: auth_group; Type: TABLE DATA; Schema: public; Owner: ficha_master
--

COPY public.auth_group (id, name) FROM stdin;
\.


--
-- Data for Name: auth_group_permissions; Type: TABLE DATA; Schema: public; Owner: ficha_master
--

COPY public.auth_group_permissions (id, group_id, permission_id) FROM stdin;
\.


--
-- Data for Name: auth_permission; Type: TABLE DATA; Schema: public; Owner: ficha_master
--

COPY public.auth_permission (id, name, content_type_id, codename) FROM stdin;
1	Can add order	1	add_order
2	Can change order	1	change_order
3	Can delete order	1	delete_order
4	Can view order	1	view_order
5	Can add menu	2	add_menu
6	Can change menu	2	change_menu
7	Can delete menu	2	delete_menu
8	Can view menu	2	view_menu
9	Can add category	3	add_category
10	Can change category	3	change_category
11	Can delete category	3	delete_category
12	Can view category	3	view_category
13	Can add place	4	add_place
14	Can change place	4	change_place
15	Can delete place	4	delete_place
16	Can view place	4	view_place
17	Can add completed_ order	5	add_completed_order
18	Can change completed_ order	5	change_completed_order
19	Can delete completed_ order	5	delete_completed_order
20	Can view completed_ order	5	view_completed_order
21	Can add waiter call	6	add_waitercall
22	Can change waiter call	6	change_waitercall
23	Can delete waiter call	6	delete_waitercall
24	Can view waiter call	6	view_waitercall
25	Can add log entry	7	add_logentry
26	Can change log entry	7	change_logentry
27	Can delete log entry	7	delete_logentry
28	Can view log entry	7	view_logentry
29	Can add permission	8	add_permission
30	Can change permission	8	change_permission
31	Can delete permission	8	delete_permission
32	Can view permission	8	view_permission
33	Can add group	9	add_group
34	Can change group	9	change_group
35	Can delete group	9	delete_group
36	Can view group	9	view_group
37	Can add user	10	add_user
38	Can change user	10	change_user
39	Can delete user	10	delete_user
40	Can view user	10	view_user
41	Can add content type	11	add_contenttype
42	Can change content type	11	change_contenttype
43	Can delete content type	11	delete_contenttype
44	Can view content type	11	view_contenttype
45	Can add session	12	add_session
46	Can change session	12	change_session
47	Can delete session	12	delete_session
48	Can view session	12	view_session
\.


--
-- Data for Name: auth_user; Type: TABLE DATA; Schema: public; Owner: ficha_master
--

COPY public.auth_user (id, password, last_login, is_superuser, username, first_name, last_name, email, is_staff, is_active, date_joined) FROM stdin;
1	pbkdf2_sha256$216000$Gx68PNLjkQUI$MD3VW+QuBQGnVd41keoOYKvKH6Abn/MomA0aheVZW/s=	2021-05-27 05:32:29.396603+00	t	qwerty			nestor137137@gmail.com	t	t	2021-05-09 11:28:36.862645+00
\.


--
-- Data for Name: auth_user_groups; Type: TABLE DATA; Schema: public; Owner: ficha_master
--

COPY public.auth_user_groups (id, user_id, group_id) FROM stdin;
\.


--
-- Data for Name: auth_user_user_permissions; Type: TABLE DATA; Schema: public; Owner: ficha_master
--

COPY public.auth_user_user_permissions (id, user_id, permission_id) FROM stdin;
\.


--
-- Data for Name: django_admin_log; Type: TABLE DATA; Schema: public; Owner: ficha_master
--

COPY public.django_admin_log (id, action_time, object_id, object_repr, action_flag, change_message, content_type_id, user_id) FROM stdin;
1	2021-05-09 11:34:35.563468+00	1	Поживно	1	[{"added": {}}]	3	1
2	2021-05-09 11:35:21.832811+00	2	смачно	1	[{"added": {}}]	3	1
3	2021-05-09 11:35:51.895445+00	3	сидіти	1	[{"added": {}}]	3	1
4	2021-05-09 11:36:24.52022+00	4	redacted	1	[{"added": {}}]	3	1
5	2021-05-09 12:02:25.880283+00	1	Loaf of bread	1	[{"added": {}}]	2	1
6	2021-05-09 12:04:50.941202+00	2	Good steak	1	[{"added": {}}]	2	1
7	2021-05-09 12:09:38.879516+00	3	Yaiko	1	[{"added": {}}]	2	1
8	2021-05-09 12:12:14.381084+00	4	Wine	1	[{"added": {}}]	2	1
9	2021-05-09 12:13:08.394628+00	5	Water	1	[{"added": {}}]	2	1
10	2021-05-09 13:43:48.395616+00	1	1	1	[{"added": {}}]	4	1
11	2021-05-18 16:21:43.56915+00	6	borshch	1	[{"added": {}}]	2	1
12	2021-05-18 16:22:25.291881+00	6	borshch	3		2	1
\.


--
-- Data for Name: django_content_type; Type: TABLE DATA; Schema: public; Owner: ficha_master
--

COPY public.django_content_type (id, app_label, model) FROM stdin;
1	hot_res_app	order
2	hot_res_app	menu
3	hot_res_app	category
4	hot_res_app	place
5	hot_res_app	completed_order
6	hot_res_app	waitercall
7	admin	logentry
8	auth	permission
9	auth	group
10	auth	user
11	contenttypes	contenttype
12	sessions	session
\.


--
-- Data for Name: django_migrations; Type: TABLE DATA; Schema: public; Owner: ficha_master
--

COPY public.django_migrations (id, app, name, applied) FROM stdin;
1	contenttypes	0001_initial	2021-05-09 11:23:07.138593+00
2	auth	0001_initial	2021-05-09 11:23:07.480794+00
3	admin	0001_initial	2021-05-09 11:23:08.302716+00
4	admin	0002_logentry_remove_auto_add	2021-05-09 11:23:08.566243+00
5	admin	0003_logentry_add_action_flag_choices	2021-05-09 11:23:08.698703+00
6	contenttypes	0002_remove_content_type_name	2021-05-09 11:23:08.892499+00
7	auth	0002_alter_permission_name_max_length	2021-05-09 11:23:09.047591+00
8	auth	0003_alter_user_email_max_length	2021-05-09 11:23:09.261183+00
9	auth	0004_alter_user_username_opts	2021-05-09 11:23:09.413092+00
10	auth	0005_alter_user_last_login_null	2021-05-09 11:23:09.619819+00
11	auth	0006_require_contenttypes_0002	2021-05-09 11:23:09.772846+00
12	auth	0007_alter_validators_add_error_messages	2021-05-09 11:23:09.919156+00
13	auth	0008_alter_user_username_max_length	2021-05-09 11:23:10.089461+00
14	auth	0009_alter_user_last_name_max_length	2021-05-09 11:23:10.309295+00
15	auth	0010_alter_group_name_max_length	2021-05-09 11:23:10.522663+00
16	auth	0011_update_proxy_permissions	2021-05-09 11:23:10.708803+00
17	auth	0012_alter_user_first_name_max_length	2021-05-09 11:23:10.970041+00
18	hot_res_app	0001_initial	2021-05-09 11:23:12.351382+00
19	hot_res_app	0002_auto_20201108_0203	2021-05-09 11:23:13.760684+00
20	hot_res_app	0003_auto_20201119_0016	2021-05-09 11:23:13.967464+00
21	hot_res_app	0004_auto_20201214_2051	2021-05-09 11:23:14.217541+00
22	hot_res_app	0005_auto_20201214_2052	2021-05-09 11:23:14.625199+00
23	hot_res_app	0006_auto_20210208_1638	2021-05-09 11:23:14.864323+00
24	hot_res_app	0007_auto_20210208_1750	2021-05-09 11:23:14.999369+00
25	hot_res_app	0008_auto_20210208_1758	2021-05-09 11:23:15.390472+00
26	hot_res_app	0009_auto_20210208_1801	2021-05-09 11:23:15.563814+00
27	hot_res_app	0010_auto_20210215_0134	2021-05-09 11:23:15.817428+00
28	hot_res_app	0011_completed_order_place	2021-05-09 11:23:16.108367+00
29	hot_res_app	0012_auto_20210216_1645	2021-05-09 11:23:16.325236+00
30	sessions	0001_initial	2021-05-09 11:23:16.534815+00
\.


--
-- Data for Name: django_session; Type: TABLE DATA; Schema: public; Owner: ficha_master
--

COPY public.django_session (session_key, session_data, expire_date) FROM stdin;
m8rmhlrpozw6md1bk9recijr37bokbus	.eJxVjDsOwjAQRO_iGln-Jiwlfc5g7dprHECOFCcV4u5gKQVUI817My8RcN9K2BuvYU7iIrQ4_XaE8cG1g3THeltkXOq2ziS7Ig_a5LQkfl4P9--gYCvftctWp-QUWswZyWdN5sxAjrQyjBkHDaNjCymSAW_B9wAG5RHGwYv3BwJcOAk:1lfhcu:bigbzqBDxWrIXeFH7pHSKT7PTXCXCPYyOT8Hq_-D630	2021-05-10 05:29:36.546971+00
aiczvcsjdkn3sv3870ekaubzpmblzt87	.eJxVjDsOwjAQRO_iGln-Jiwlfc5g7dprHECOFCcV4u5gKQVUI817My8RcN9K2BuvYU7iIrQ4_XaE8cG1g3THeltkXOq2ziS7Ig_a5LQkfl4P9--gYCvftctWp-QUWswZyWdN5sxAjrQyjBkHDaNjCymSAW_B9wAG5RHGwYv3BwJcOAk:1lfhvd:AZJjv_mboAL757qqvtiuC9f8B0J4hRqFVt-rqTRsrfM	2021-05-23 11:48:57.762102+00
rw17kjlqc011216gn6qoaij66l0u4btn	.eJxVjDsOwjAQRO_iGln-Jiwlfc5g7dprHECOFCcV4u5gKQVUI817My8RcN9K2BuvYU7iIrQ4_XaE8cG1g3THeltkXOq2ziS7Ig_a5LQkfl4P9--gYCvftctWp-QUWswZyWdN5sxAjrQyjBkHDaNjCymSAW_B9wAG5RHGwYv3BwJcOAk:1lfl5R:pPHeKyMAJ3IxvDblAjULqM5luFZXIJRLz7bCqYArCik	2021-05-10 09:11:17.023399+00
18kvnyfdgose8n1ht86yb0zsc5pcn9hh	.eJxVjDsOwjAQRO_iGln-Jiwlfc5g7dprHECOFCcV4u5gKQVUI817My8RcN9K2BuvYU7iIrQ4_XaE8cG1g3THeltkXOq2ziS7Ig_a5LQkfl4P9--gYCvftctWp-QUWswZyWdN5sxAjrQyjBkHDaNjCymSAW_B9wAG5RHGwYv3BwJcOAk:1lixsl:VKWJRijvxYUDRniYr8GOPkFNjY6cjZorO46-NBgZ6Vw	2021-05-19 05:27:27.474525+00
eu5cxwq6fvz9b849110ieigeuzv32u6z	.eJxVjDsOwjAQRO_iGln-Jiwlfc5g7dprHECOFCcV4u5gKQVUI817My8RcN9K2BuvYU7iIrQ4_XaE8cG1g3THeltkXOq2ziS7Ig_a5LQkfl4P9--gYCvftctWp-QUWswZyWdN5sxAjrQyjBkHDaNjCymSAW_B9wAG5RHGwYv3BwJcOAk:1llugq:wA0Zs042ZEEWCfTsyJZhbO9kf93EN-f19jZKigRnhGk	2021-05-27 08:39:20.801649+00
12ylykdtzfo8aogi8m33polt9bid5mnf	.eJxVjDsOwjAQRO_iGln-Jiwlfc5g7dprHECOFCcV4u5gKQVUI817My8RcN9K2BuvYU7iIrQ4_XaE8cG1g3THeltkXOq2ziS7Ig_a5LQkfl4P9--gYCvftctWp-QUWswZyWdN5sxAjrQyjBkHDaNjCymSAW_B9wAG5RHGwYv3BwJcOAk:1lm8dB:OPUb3wRCmpbcB7fuOt1QD5zachlOlZ2EBKPUtZl8wfs	2021-05-27 23:32:29.435054+00
\.


--
-- Data for Name: hot_res_app_category; Type: TABLE DATA; Schema: public; Owner: ficha_master
--

COPY public.hot_res_app_category (id, name, image) FROM stdin;
1	Поживно	hot_res_app/static/hot_res_app/images/categories/waterbottle_icon32.png
2	смачно	hot_res_app/static/hot_res_app/images/categories/egg_icon32.png
3	сидіти	hot_res_app/static/hot_res_app/images/categories/cake_icon32.png
4	redacted	hot_res_app/static/hot_res_app/images/categories/steak_icon32.png
\.


--
-- Data for Name: hot_res_app_completed_order; Type: TABLE DATA; Schema: public; Owner: ficha_master
--

COPY public.hot_res_app_completed_order (id, "order", date_time_started, date_time_completed, place) FROM stdin;
1	{"2": {"name": "Good steak", "number": 1}, "3": {"name": "Yaiko", "number": 1}, "4": {"name": "Wine", "number": 1}}	2021-05-18 16:24:04.826987+00	2021-05-18 16:24:29.060678+00	
2	{"1": {"name": "Loaf of bread", "number": 2}, "2": {"name": "Good steak", "number": 1}}	2021-05-09 15:12:45.623954+00	2021-05-18 16:24:41.703132+00	
\.


--
-- Data for Name: hot_res_app_menu; Type: TABLE DATA; Schema: public; Owner: ficha_master
--

COPY public.hot_res_app_menu (id, name, description, price, image, category_id, is_available) FROM stdin;
1	Loaf of bread	Yummy bread	19.35	hot_res_app/static/hot_res_app/images/menu_items/bread_icon32.png	1	t
2	Good steak	Medium rare	150.00	hot_res_app/static/hot_res_app/images/menu_items/steak_icon32.png	1	t
3	Yaiko	Well boiled or fried egg	45.00	hot_res_app/static/hot_res_app/images/menu_items/egg_icon32.png	2	t
4	Wine	Good wine, you know	200.00	hot_res_app/static/hot_res_app/images/menu_items/healingpotionii_icon32.png	2	t
5	Water	Simple bottle of water	10.00	hot_res_app/static/hot_res_app/images/menu_items/waterbottle_icon32.png	1	t
\.


--
-- Data for Name: hot_res_app_order; Type: TABLE DATA; Schema: public; Owner: ficha_master
--

COPY public.hot_res_app_order (id, "order", date_time, place) FROM stdin;
2	{"2": {"name": "Good steak", "number": 3}, "4": {"name": "Wine", "number": 7}}	2021-05-18 11:27:34.732418+00	1
3	{"1": {"name": "Loaf of bread", "number": 5}, "3": {"name": "Yaiko", "number": 1}, "4": {"name": "Wine", "number": 2}}	2021-05-18 16:23:31.406028+00	1
4	{"1": {"name": "Loaf of bread", "number": 1}, "2": {"name": "Good steak", "number": 1}}	2021-05-18 16:23:58.592685+00	1
6	{"1": {"name": "Loaf of bread", "number": 7}, "2": {"name": "Good steak", "number": 3}, "3": {"name": "Yaiko", "number": 1}, "5": {"name": "Water", "number": 3}}	2021-05-27 05:32:48.365904+00	1
\.


--
-- Data for Name: hot_res_app_place; Type: TABLE DATA; Schema: public; Owner: ficha_master
--

COPY public.hot_res_app_place (id, name, qr_code, url) FROM stdin;
1	1	hot_res_app/static/hot_res_app/images/qr_codes/qr_code_1.png	http://192.168.31.102:8000/menu/1/
\.


--
-- Data for Name: hot_res_app_waitercall; Type: TABLE DATA; Schema: public; Owner: ficha_master
--

COPY public.hot_res_app_waitercall (id, place, date_time) FROM stdin;
1	1	2021-05-09 15:12:11.076321+00
2	1	2021-05-09 15:12:22.846608+00
3	1	2021-05-18 16:22:42.727736+00
4	1	2021-05-18 16:22:45.787338+00
\.


--
-- Name: auth_group_id_seq; Type: SEQUENCE SET; Schema: public; Owner: ficha_master
--

SELECT pg_catalog.setval('public.auth_group_id_seq', 1, false);


--
-- Name: auth_group_permissions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: ficha_master
--

SELECT pg_catalog.setval('public.auth_group_permissions_id_seq', 1, false);


--
-- Name: auth_permission_id_seq; Type: SEQUENCE SET; Schema: public; Owner: ficha_master
--

SELECT pg_catalog.setval('public.auth_permission_id_seq', 48, true);


--
-- Name: auth_user_groups_id_seq; Type: SEQUENCE SET; Schema: public; Owner: ficha_master
--

SELECT pg_catalog.setval('public.auth_user_groups_id_seq', 1, false);


--
-- Name: auth_user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: ficha_master
--

SELECT pg_catalog.setval('public.auth_user_id_seq', 1, true);


--
-- Name: auth_user_user_permissions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: ficha_master
--

SELECT pg_catalog.setval('public.auth_user_user_permissions_id_seq', 1, false);


--
-- Name: django_admin_log_id_seq; Type: SEQUENCE SET; Schema: public; Owner: ficha_master
--

SELECT pg_catalog.setval('public.django_admin_log_id_seq', 12, true);


--
-- Name: django_content_type_id_seq; Type: SEQUENCE SET; Schema: public; Owner: ficha_master
--

SELECT pg_catalog.setval('public.django_content_type_id_seq', 12, true);


--
-- Name: django_migrations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: ficha_master
--

SELECT pg_catalog.setval('public.django_migrations_id_seq', 30, true);


--
-- Name: hot_res_app_categories_id_seq; Type: SEQUENCE SET; Schema: public; Owner: ficha_master
--

SELECT pg_catalog.setval('public.hot_res_app_categories_id_seq', 4, true);


--
-- Name: hot_res_app_completed_order_id_seq; Type: SEQUENCE SET; Schema: public; Owner: ficha_master
--

SELECT pg_catalog.setval('public.hot_res_app_completed_order_id_seq', 2, true);


--
-- Name: hot_res_app_menu_id_seq; Type: SEQUENCE SET; Schema: public; Owner: ficha_master
--

SELECT pg_catalog.setval('public.hot_res_app_menu_id_seq', 6, true);


--
-- Name: hot_res_app_order_id_seq; Type: SEQUENCE SET; Schema: public; Owner: ficha_master
--

SELECT pg_catalog.setval('public.hot_res_app_order_id_seq', 6, true);


--
-- Name: hot_res_app_places_id_seq; Type: SEQUENCE SET; Schema: public; Owner: ficha_master
--

SELECT pg_catalog.setval('public.hot_res_app_places_id_seq', 1, true);


--
-- Name: hot_res_app_waitercall_id_seq; Type: SEQUENCE SET; Schema: public; Owner: ficha_master
--

SELECT pg_catalog.setval('public.hot_res_app_waitercall_id_seq', 4, true);


--
-- Name: auth_group auth_group_name_key; Type: CONSTRAINT; Schema: public; Owner: ficha_master
--

ALTER TABLE ONLY public.auth_group
    ADD CONSTRAINT auth_group_name_key UNIQUE (name);


--
-- Name: auth_group_permissions auth_group_permissions_group_id_permission_id_0cd325b0_uniq; Type: CONSTRAINT; Schema: public; Owner: ficha_master
--

ALTER TABLE ONLY public.auth_group_permissions
    ADD CONSTRAINT auth_group_permissions_group_id_permission_id_0cd325b0_uniq UNIQUE (group_id, permission_id);


--
-- Name: auth_group_permissions auth_group_permissions_pkey; Type: CONSTRAINT; Schema: public; Owner: ficha_master
--

ALTER TABLE ONLY public.auth_group_permissions
    ADD CONSTRAINT auth_group_permissions_pkey PRIMARY KEY (id);


--
-- Name: auth_group auth_group_pkey; Type: CONSTRAINT; Schema: public; Owner: ficha_master
--

ALTER TABLE ONLY public.auth_group
    ADD CONSTRAINT auth_group_pkey PRIMARY KEY (id);


--
-- Name: auth_permission auth_permission_content_type_id_codename_01ab375a_uniq; Type: CONSTRAINT; Schema: public; Owner: ficha_master
--

ALTER TABLE ONLY public.auth_permission
    ADD CONSTRAINT auth_permission_content_type_id_codename_01ab375a_uniq UNIQUE (content_type_id, codename);


--
-- Name: auth_permission auth_permission_pkey; Type: CONSTRAINT; Schema: public; Owner: ficha_master
--

ALTER TABLE ONLY public.auth_permission
    ADD CONSTRAINT auth_permission_pkey PRIMARY KEY (id);


--
-- Name: auth_user_groups auth_user_groups_pkey; Type: CONSTRAINT; Schema: public; Owner: ficha_master
--

ALTER TABLE ONLY public.auth_user_groups
    ADD CONSTRAINT auth_user_groups_pkey PRIMARY KEY (id);


--
-- Name: auth_user_groups auth_user_groups_user_id_group_id_94350c0c_uniq; Type: CONSTRAINT; Schema: public; Owner: ficha_master
--

ALTER TABLE ONLY public.auth_user_groups
    ADD CONSTRAINT auth_user_groups_user_id_group_id_94350c0c_uniq UNIQUE (user_id, group_id);


--
-- Name: auth_user auth_user_pkey; Type: CONSTRAINT; Schema: public; Owner: ficha_master
--

ALTER TABLE ONLY public.auth_user
    ADD CONSTRAINT auth_user_pkey PRIMARY KEY (id);


--
-- Name: auth_user_user_permissions auth_user_user_permissions_pkey; Type: CONSTRAINT; Schema: public; Owner: ficha_master
--

ALTER TABLE ONLY public.auth_user_user_permissions
    ADD CONSTRAINT auth_user_user_permissions_pkey PRIMARY KEY (id);


--
-- Name: auth_user_user_permissions auth_user_user_permissions_user_id_permission_id_14a6b632_uniq; Type: CONSTRAINT; Schema: public; Owner: ficha_master
--

ALTER TABLE ONLY public.auth_user_user_permissions
    ADD CONSTRAINT auth_user_user_permissions_user_id_permission_id_14a6b632_uniq UNIQUE (user_id, permission_id);


--
-- Name: auth_user auth_user_username_key; Type: CONSTRAINT; Schema: public; Owner: ficha_master
--

ALTER TABLE ONLY public.auth_user
    ADD CONSTRAINT auth_user_username_key UNIQUE (username);


--
-- Name: django_admin_log django_admin_log_pkey; Type: CONSTRAINT; Schema: public; Owner: ficha_master
--

ALTER TABLE ONLY public.django_admin_log
    ADD CONSTRAINT django_admin_log_pkey PRIMARY KEY (id);


--
-- Name: django_content_type django_content_type_app_label_model_76bd3d3b_uniq; Type: CONSTRAINT; Schema: public; Owner: ficha_master
--

ALTER TABLE ONLY public.django_content_type
    ADD CONSTRAINT django_content_type_app_label_model_76bd3d3b_uniq UNIQUE (app_label, model);


--
-- Name: django_content_type django_content_type_pkey; Type: CONSTRAINT; Schema: public; Owner: ficha_master
--

ALTER TABLE ONLY public.django_content_type
    ADD CONSTRAINT django_content_type_pkey PRIMARY KEY (id);


--
-- Name: django_migrations django_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: ficha_master
--

ALTER TABLE ONLY public.django_migrations
    ADD CONSTRAINT django_migrations_pkey PRIMARY KEY (id);


--
-- Name: django_session django_session_pkey; Type: CONSTRAINT; Schema: public; Owner: ficha_master
--

ALTER TABLE ONLY public.django_session
    ADD CONSTRAINT django_session_pkey PRIMARY KEY (session_key);


--
-- Name: hot_res_app_category hot_res_app_categories_pkey; Type: CONSTRAINT; Schema: public; Owner: ficha_master
--

ALTER TABLE ONLY public.hot_res_app_category
    ADD CONSTRAINT hot_res_app_categories_pkey PRIMARY KEY (id);


--
-- Name: hot_res_app_completed_order hot_res_app_completed_order_pkey; Type: CONSTRAINT; Schema: public; Owner: ficha_master
--

ALTER TABLE ONLY public.hot_res_app_completed_order
    ADD CONSTRAINT hot_res_app_completed_order_pkey PRIMARY KEY (id);


--
-- Name: hot_res_app_menu hot_res_app_menu_pkey; Type: CONSTRAINT; Schema: public; Owner: ficha_master
--

ALTER TABLE ONLY public.hot_res_app_menu
    ADD CONSTRAINT hot_res_app_menu_pkey PRIMARY KEY (id);


--
-- Name: hot_res_app_order hot_res_app_order_pkey; Type: CONSTRAINT; Schema: public; Owner: ficha_master
--

ALTER TABLE ONLY public.hot_res_app_order
    ADD CONSTRAINT hot_res_app_order_pkey PRIMARY KEY (id);


--
-- Name: hot_res_app_place hot_res_app_places_pkey; Type: CONSTRAINT; Schema: public; Owner: ficha_master
--

ALTER TABLE ONLY public.hot_res_app_place
    ADD CONSTRAINT hot_res_app_places_pkey PRIMARY KEY (id);


--
-- Name: hot_res_app_waitercall hot_res_app_waitercall_pkey; Type: CONSTRAINT; Schema: public; Owner: ficha_master
--

ALTER TABLE ONLY public.hot_res_app_waitercall
    ADD CONSTRAINT hot_res_app_waitercall_pkey PRIMARY KEY (id);


--
-- Name: auth_group_name_a6ea08ec_like; Type: INDEX; Schema: public; Owner: ficha_master
--

CREATE INDEX auth_group_name_a6ea08ec_like ON public.auth_group USING btree (name varchar_pattern_ops);


--
-- Name: auth_group_permissions_group_id_b120cbf9; Type: INDEX; Schema: public; Owner: ficha_master
--

CREATE INDEX auth_group_permissions_group_id_b120cbf9 ON public.auth_group_permissions USING btree (group_id);


--
-- Name: auth_group_permissions_permission_id_84c5c92e; Type: INDEX; Schema: public; Owner: ficha_master
--

CREATE INDEX auth_group_permissions_permission_id_84c5c92e ON public.auth_group_permissions USING btree (permission_id);


--
-- Name: auth_permission_content_type_id_2f476e4b; Type: INDEX; Schema: public; Owner: ficha_master
--

CREATE INDEX auth_permission_content_type_id_2f476e4b ON public.auth_permission USING btree (content_type_id);


--
-- Name: auth_user_groups_group_id_97559544; Type: INDEX; Schema: public; Owner: ficha_master
--

CREATE INDEX auth_user_groups_group_id_97559544 ON public.auth_user_groups USING btree (group_id);


--
-- Name: auth_user_groups_user_id_6a12ed8b; Type: INDEX; Schema: public; Owner: ficha_master
--

CREATE INDEX auth_user_groups_user_id_6a12ed8b ON public.auth_user_groups USING btree (user_id);


--
-- Name: auth_user_user_permissions_permission_id_1fbb5f2c; Type: INDEX; Schema: public; Owner: ficha_master
--

CREATE INDEX auth_user_user_permissions_permission_id_1fbb5f2c ON public.auth_user_user_permissions USING btree (permission_id);


--
-- Name: auth_user_user_permissions_user_id_a95ead1b; Type: INDEX; Schema: public; Owner: ficha_master
--

CREATE INDEX auth_user_user_permissions_user_id_a95ead1b ON public.auth_user_user_permissions USING btree (user_id);


--
-- Name: auth_user_username_6821ab7c_like; Type: INDEX; Schema: public; Owner: ficha_master
--

CREATE INDEX auth_user_username_6821ab7c_like ON public.auth_user USING btree (username varchar_pattern_ops);


--
-- Name: django_admin_log_content_type_id_c4bce8eb; Type: INDEX; Schema: public; Owner: ficha_master
--

CREATE INDEX django_admin_log_content_type_id_c4bce8eb ON public.django_admin_log USING btree (content_type_id);


--
-- Name: django_admin_log_user_id_c564eba6; Type: INDEX; Schema: public; Owner: ficha_master
--

CREATE INDEX django_admin_log_user_id_c564eba6 ON public.django_admin_log USING btree (user_id);


--
-- Name: django_session_expire_date_a5c62663; Type: INDEX; Schema: public; Owner: ficha_master
--

CREATE INDEX django_session_expire_date_a5c62663 ON public.django_session USING btree (expire_date);


--
-- Name: django_session_session_key_c0390e0f_like; Type: INDEX; Schema: public; Owner: ficha_master
--

CREATE INDEX django_session_session_key_c0390e0f_like ON public.django_session USING btree (session_key varchar_pattern_ops);


--
-- Name: hot_res_app_menu_category_id_a657d49a; Type: INDEX; Schema: public; Owner: ficha_master
--

CREATE INDEX hot_res_app_menu_category_id_a657d49a ON public.hot_res_app_menu USING btree (category_id);


--
-- Name: auth_group_permissions auth_group_permissio_permission_id_84c5c92e_fk_auth_perm; Type: FK CONSTRAINT; Schema: public; Owner: ficha_master
--

ALTER TABLE ONLY public.auth_group_permissions
    ADD CONSTRAINT auth_group_permissio_permission_id_84c5c92e_fk_auth_perm FOREIGN KEY (permission_id) REFERENCES public.auth_permission(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: auth_group_permissions auth_group_permissions_group_id_b120cbf9_fk_auth_group_id; Type: FK CONSTRAINT; Schema: public; Owner: ficha_master
--

ALTER TABLE ONLY public.auth_group_permissions
    ADD CONSTRAINT auth_group_permissions_group_id_b120cbf9_fk_auth_group_id FOREIGN KEY (group_id) REFERENCES public.auth_group(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: auth_permission auth_permission_content_type_id_2f476e4b_fk_django_co; Type: FK CONSTRAINT; Schema: public; Owner: ficha_master
--

ALTER TABLE ONLY public.auth_permission
    ADD CONSTRAINT auth_permission_content_type_id_2f476e4b_fk_django_co FOREIGN KEY (content_type_id) REFERENCES public.django_content_type(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: auth_user_groups auth_user_groups_group_id_97559544_fk_auth_group_id; Type: FK CONSTRAINT; Schema: public; Owner: ficha_master
--

ALTER TABLE ONLY public.auth_user_groups
    ADD CONSTRAINT auth_user_groups_group_id_97559544_fk_auth_group_id FOREIGN KEY (group_id) REFERENCES public.auth_group(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: auth_user_groups auth_user_groups_user_id_6a12ed8b_fk_auth_user_id; Type: FK CONSTRAINT; Schema: public; Owner: ficha_master
--

ALTER TABLE ONLY public.auth_user_groups
    ADD CONSTRAINT auth_user_groups_user_id_6a12ed8b_fk_auth_user_id FOREIGN KEY (user_id) REFERENCES public.auth_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: auth_user_user_permissions auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm; Type: FK CONSTRAINT; Schema: public; Owner: ficha_master
--

ALTER TABLE ONLY public.auth_user_user_permissions
    ADD CONSTRAINT auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm FOREIGN KEY (permission_id) REFERENCES public.auth_permission(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: auth_user_user_permissions auth_user_user_permissions_user_id_a95ead1b_fk_auth_user_id; Type: FK CONSTRAINT; Schema: public; Owner: ficha_master
--

ALTER TABLE ONLY public.auth_user_user_permissions
    ADD CONSTRAINT auth_user_user_permissions_user_id_a95ead1b_fk_auth_user_id FOREIGN KEY (user_id) REFERENCES public.auth_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: django_admin_log django_admin_log_content_type_id_c4bce8eb_fk_django_co; Type: FK CONSTRAINT; Schema: public; Owner: ficha_master
--

ALTER TABLE ONLY public.django_admin_log
    ADD CONSTRAINT django_admin_log_content_type_id_c4bce8eb_fk_django_co FOREIGN KEY (content_type_id) REFERENCES public.django_content_type(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: django_admin_log django_admin_log_user_id_c564eba6_fk_auth_user_id; Type: FK CONSTRAINT; Schema: public; Owner: ficha_master
--

ALTER TABLE ONLY public.django_admin_log
    ADD CONSTRAINT django_admin_log_user_id_c564eba6_fk_auth_user_id FOREIGN KEY (user_id) REFERENCES public.auth_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: hot_res_app_menu hot_res_app_menu_category_id_a657d49a_fk_hot_res_a; Type: FK CONSTRAINT; Schema: public; Owner: ficha_master
--

ALTER TABLE ONLY public.hot_res_app_menu
    ADD CONSTRAINT hot_res_app_menu_category_id_a657d49a_fk_hot_res_a FOREIGN KEY (category_id) REFERENCES public.hot_res_app_category(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: postgres
--

REVOKE ALL ON SCHEMA public FROM rdsadmin;
REVOKE ALL ON SCHEMA public FROM PUBLIC;
GRANT ALL ON SCHEMA public TO postgres;
GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- PostgreSQL database dump complete
--

