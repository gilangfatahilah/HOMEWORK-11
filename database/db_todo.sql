PGDMP  .    
            	    {            db_todo    16.0    16.0     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    17154    db_todo    DATABASE     ~   CREATE DATABASE db_todo WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_Indonesia.1252';
    DROP DATABASE db_todo;
                postgres    false            �            1259    17155    todo    TABLE     �   CREATE TABLE public.todo (
    id integer NOT NULL,
    title character varying(100),
    description character varying(150)
);
    DROP TABLE public.todo;
       public         heap    postgres    false            �          0    17155    todo 
   TABLE DATA           6   COPY public.todo (id, title, description) FROM stdin;
    public          postgres    false    215   ,       P           2606    17159    todo todo_pkey 
   CONSTRAINT     L   ALTER TABLE ONLY public.todo
    ADD CONSTRAINT todo_pkey PRIMARY KEY (id);
 8   ALTER TABLE ONLY public.todo DROP CONSTRAINT todo_pkey;
       public            postgres    false    215            �   [   x�3�t�W���M-�/��}+�\�Դ��T�����"#K.C#N��܂�ԒT�����ĢJN��l8G�1)��dJpIiJ�"W� �u �     