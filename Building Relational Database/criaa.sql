-- Gerado por Oracle SQL Developer Data Modeler 22.2.0.165.1149
--   em:        2022-10-31 14:16:13 BRT
--   site:      Oracle Database 11g
--   tipo:      Oracle Database 11g



DROP TABLE t_sc_chamado CASCADE CONSTRAINTS;

DROP TABLE t_sc_contato CASCADE CONSTRAINTS;

DROP TABLE t_sc_contato_emergencia CASCADE CONSTRAINTS;

DROP TABLE t_sc_endereco CASCADE CONSTRAINTS;

DROP TABLE t_sc_plano_saude CASCADE CONSTRAINTS;

DROP TABLE t_sc_und_hospitalar CASCADE CONSTRAINTS;

DROP TABLE t_sc_usuario CASCADE CONSTRAINTS;

DROP TABLE t_sc_veiculo CASCADE CONSTRAINTS;

-- predefined type, no DDL - MDSYS.SDO_GEOMETRY

-- predefined type, no DDL - XMLTYPE

CREATE TABLE t_sc_chamado (
    id_chamado            NUMBER(10) NOT NULL,
    id_veiculo            NUMBER(10) NOT NULL,
    id_contato_emergencia NUMBER(10) NOT NULL,
    tp_ocorrencia         VARCHAR2(20) NOT NULL,
    ds_grau_ocorrencia    VARCHAR2(20) NOT NULL,
    loc_ocorrencia        VARCHAR2(30) NOT NULL,
    ds_cordenadas         VARCHAR2(20) NOT NULL,
    dt_chamado            DATE NOT NULL
);

COMMENT ON COLUMN t_sc_chamado.id_chamado IS
    'Respons�vel pela identifica��o do chamado';

COMMENT ON COLUMN t_sc_chamado.tp_ocorrencia IS
    'espons�vel pelo tipo de ocorr�ncia do chamado exp: dormindo no volante
';

COMMENT ON COLUMN t_sc_chamado.ds_grau_ocorrencia IS
    'Grau da ocorr�ncia identificado pelo sistema.
';

COMMENT ON COLUMN t_sc_chamado.loc_ocorrencia IS
    'Descri��o das localiza��es da ocorr�ncia, para um atendimento mais preciso
';

COMMENT ON COLUMN t_sc_chamado.ds_cordenadas IS
    'Descri��o das coordenadas onde o ve�culo foi visto pela �ltima vez.
';

COMMENT ON COLUMN t_sc_chamado.dt_chamado IS
    ' Dados do dia no qual o chamado foi realizado
';

ALTER TABLE t_sc_chamado ADD CONSTRAINT t_sc_chamado_pk PRIMARY KEY ( id_chamado );

CREATE TABLE t_sc_contato (
    id_contato  NUMBER(10) NOT NULL,
    id_usuario  NUMBER(10) NOT NULL,
    nr_telefone NUMBER(9) NOT NULL,
    nm_contato  VARCHAR2(30) NOT NULL,
    ds_ddd      NUMBER(2) NOT NULL,
    ds_ddi      NUMBER(3) NOT NULL,
    ds_email    VARCHAR2(50) NOT NULL
);

ALTER TABLE t_sc_contato
    ADD CONSTRAINT ck_sc_contato_telefone CHECK ( nr_telefone BETWEEN 8 AND 9 );

ALTER TABLE t_sc_contato
    ADD CONSTRAINT ck_sc_contato_ddd CHECK ( ds_ddd BETWEEN 3 AND 3 );

ALTER TABLE t_sc_contato
    ADD CONSTRAINT ck_sc_contato_ddi CHECK ( ds_ddi BETWEEN 2 AND 3 );

COMMENT ON COLUMN t_sc_contato.id_contato IS
    'Respons�vel pela identifica��o do contato
';

COMMENT ON COLUMN t_sc_contato.nr_telefone IS
    'Respons�vel por armazenar o n�mero de telefone sem ddd e ddi.
';

COMMENT ON COLUMN t_sc_contato.nm_contato IS
    'Respons�vel por armazenar o nome do contato
';

COMMENT ON COLUMN t_sc_contato.ds_ddi IS
    'Respons�vel por armazenar o ddi do telefone
';

COMMENT ON COLUMN t_sc_contato.ds_email IS
    'Respons�vel por armazenar o email do contato
';

ALTER TABLE t_sc_contato ADD CONSTRAINT t_sc_contato_pk PRIMARY KEY ( id_contato );

ALTER TABLE t_sc_contato ADD CONSTRAINT uk_t_sc_nr_telefone UNIQUE ( nr_telefone );

CREATE TABLE t_sc_contato_emergencia (
    id_contato_emergencia NUMBER(10) NOT NULL,
    tp_contato_emergencia VARCHAR2(30) NOT NULL,
    nr_telefone           NUMBER(9) NOT NULL,
    ds_ddd                NUMBER(2) NOT NULL,
    ds_ddi                NUMBER(3) NOT NULL
);

ALTER TABLE t_sc_contato_emergencia ADD CHECK ( nr_telefone BETWEEN 8 AND 9 );

ALTER TABLE t_sc_contato_emergencia ADD CHECK ( ds_ddd BETWEEN 3 AND 3 );

ALTER TABLE t_sc_contato_emergencia ADD CHECK ( ds_ddi BETWEEN 2 AND 3 );

COMMENT ON COLUMN t_sc_contato_emergencia.id_contato_emergencia IS
    'Respons�vel pela identifica��o do contato
';

COMMENT ON COLUMN t_sc_contato_emergencia.tp_contato_emergencia IS
    'Respons�vel por armazenar o tipo de contato, policial, ambulat�rio e entre outros.

';

COMMENT ON COLUMN t_sc_contato_emergencia.nr_telefone IS
    'Respons�vel por armazenar o n�mero de telefone sem ddd e ddi.
';

COMMENT ON COLUMN t_sc_contato_emergencia.ds_ddi IS
    'Respons�vel por armazenar o ddi do telefone
';

ALTER TABLE t_sc_contato_emergencia ADD CONSTRAINT t_sc_contato_emergencia_pk PRIMARY KEY ( id_contato_emergencia );

CREATE TABLE t_sc_endereco (
    id_endereco   NUMBER(10) NOT NULL,
    id_usuario    NUMBER(10) NOT NULL,
    ds_estado     VARCHAR2(20) NOT NULL,
    ds_cep        NUMBER(8) NOT NULL,
    ds_cidade     VARCHAR2(30) NOT NULL,
    ds_logradouro VARCHAR2(60) NOT NULL,
    ds_numero     VARCHAR2(10) NOT NULL,
    ds_pais       VARCHAR2(20) NOT NULL
);

COMMENT ON COLUMN t_sc_endereco.id_endereco IS
    'Respons�vel pela identifica��o  do endere�o.';

COMMENT ON COLUMN t_sc_endereco.ds_estado IS
    'Respons�vel pelo estado do endere�o
';

COMMENT ON COLUMN t_sc_endereco.ds_cep IS
    'Respons�vel pelo cep do endere�o
';

COMMENT ON COLUMN t_sc_endereco.ds_cidade IS
    'Responsavel pela cidade do endere�o';

COMMENT ON COLUMN t_sc_endereco.ds_logradouro IS
    'Respons�vel pelo logradouro do endere�o
';

COMMENT ON COLUMN t_sc_endereco.ds_numero IS
    'Responsavel pelo n�mero do endere�o
';

COMMENT ON COLUMN t_sc_endereco.ds_pais IS
    'Respons�vel pelo pais do endere�o
';

ALTER TABLE t_sc_endereco ADD CONSTRAINT t_sc_endereco_pk PRIMARY KEY ( id_endereco );

CREATE TABLE t_sc_plano_saude (
    id_plano_saude         NUMBER(10) NOT NULL,
    id_usuario             NUMBER(10) NOT NULL,
    ds_empresa_plano_saude VARCHAR2(30) NOT NULL,
    nm_plano_saude         VARCHAR2(40) NOT NULL,
    tp_plano_saude         VARCHAR2(30) NOT NULL,
    ds_descricao_plano     VARCHAR2(200) NOT NULL
);

COMMENT ON COLUMN t_sc_plano_saude.id_plano_saude IS
    'Respons�vel pela identifica��o do plano de sa�de.
';

COMMENT ON COLUMN t_sc_plano_saude.ds_empresa_plano_saude IS
    'Respons�vel por informar a empresa que fornece o plano de sa�de.
';

COMMENT ON COLUMN t_sc_plano_saude.nm_plano_saude IS
    'Respons�vel pelo nome do plano de sa�de.
';

COMMENT ON COLUMN t_sc_plano_saude.tp_plano_saude IS
    'Respons�vel pelo tipo de plano de sa�de, adulto, infantil, idoso.
';

COMMENT ON COLUMN t_sc_plano_saude.ds_descricao_plano IS
    'Respons�vel pela descri��o completa do plano de sa�de do usu�rio.
';

ALTER TABLE t_sc_plano_saude ADD CONSTRAINT t_sc_plano_saude_pk PRIMARY KEY ( id_plano_saude );

CREATE TABLE t_sc_und_hospitalar (
    id_und_hospitalar   NUMBER(10) NOT NULL,
    id_plano_saude      NUMBER(10) NOT NULL,
    nm_und_hospitalar   VARCHAR2(20) NOT NULL,
    ds_endereco_unidade VARCHAR2(60) NOT NULL,
    ds_cep_unidade      NUMBER(8) NOT NULL,
    ds_cidade           VARCHAR2(30) NOT NULL,
    ds_logradouro       VARCHAR2(60) NOT NULL,
    ds_numero           VARCHAR2(10) NOT NULL,
    ds_estado           VARCHAR2(20) NOT NULL
);

COMMENT ON COLUMN t_sc_und_hospitalar.id_und_hospitalar IS
    'Respons�vel pelo id da unidade hospitalar
';

COMMENT ON COLUMN t_sc_und_hospitalar.nm_und_hospitalar IS
    'Respons�vel pelo nome da unidade';

COMMENT ON COLUMN t_sc_und_hospitalar.ds_endereco_unidade IS
    ' Responsavel pelo endere�o
';

COMMENT ON COLUMN t_sc_und_hospitalar.ds_cep_unidade IS
    ' Respons�vel pelo cep da unidade
';

COMMENT ON COLUMN t_sc_und_hospitalar.ds_cidade IS
    'Responsavel pela cidade do endere�o
';

COMMENT ON COLUMN t_sc_und_hospitalar.ds_logradouro IS
    ' Respons�vel pelo logradouro do endere�o';

COMMENT ON COLUMN t_sc_und_hospitalar.ds_numero IS
    'Responsavel pelo n�mero do endere�o';

COMMENT ON COLUMN t_sc_und_hospitalar.ds_estado IS
    'Respons�vel pelo estado do endere�o';

ALTER TABLE t_sc_und_hospitalar ADD CONSTRAINT t_sc_und_hospitalar_pk PRIMARY KEY ( id_und_hospitalar );

CREATE TABLE t_sc_usuario (
    id_usuario           NUMBER(10) NOT NULL,
    id_veiculo           NUMBER(10) NOT NULL,
    nm_usuario           VARCHAR2(40) NOT NULL,
    ds_idade_usuario     NUMBER(3) NOT NULL,
    ds_profissao_usuario VARCHAR2(30) NOT NULL,
    ds_salario_usuario   NUMBER(10),
    ds_raca_usuario      VARCHAR2(20) NOT NULL,
    ds_genero            VARCHAR2(30) NOT NULL,
    ds_nacionalidade     VARCHAR2(20) NOT NULL,
    tp_sanguinio         VARCHAR2(30) NOT NULL,
    ds_login             VARCHAR2(20) NOT NULL,
    ds_senha             VARCHAR2(20) NOT NULL
);

ALTER TABLE t_sc_usuario
    ADD CONSTRAINT ck_sc_usuario_idade CHECK ( ds_idade_usuario BETWEEN 1 AND 130 );

ALTER TABLE t_sc_usuario
    ADD CONSTRAINT ck_sc_usuario_genero CHECK ( ds_genero IN ( 'F', 'M' ) );

ALTER TABLE t_sc_usuario
    ADD CONSTRAINT ck_sc_usuario_tp_sanguineo CHECK ( tp_sanguinio IN ( 'A+', 'A-', 'AB+', 'AB-', 'B+',
                                                                        'B-', 'O+', 'O-' ) );

COMMENT ON COLUMN t_sc_usuario.id_usuario IS
    'Respons�vel por armazenar a identifica��o do usu�rio.
';

COMMENT ON COLUMN t_sc_usuario.nm_usuario IS
    'Respons�vel por armazenar o nome do usu�rio.
';

COMMENT ON COLUMN t_sc_usuario.ds_idade_usuario IS
    'Respons�vel por armazenar a idade do usu�rio.
';

COMMENT ON COLUMN t_sc_usuario.ds_profissao_usuario IS
    'Respons�vel por armazenar a profiss�o atual do usu�rio.
';

COMMENT ON COLUMN t_sc_usuario.ds_salario_usuario IS
    'Respons�vel por armazenar o sal�rio do usu�rio.
';

COMMENT ON COLUMN t_sc_usuario.ds_raca_usuario IS
    'Respons�vel por armazenar a ra�a do usu�rio.
';

COMMENT ON COLUMN t_sc_usuario.ds_genero IS
    'Respons�vel por armazenar o g�nero do usu�rio.
';

COMMENT ON COLUMN t_sc_usuario.ds_nacionalidade IS
    'Respons�vel por armazenar a nacionalidade do usu�rio.
';

COMMENT ON COLUMN t_sc_usuario.tp_sanguinio IS
    'Respons�vel por armazenar o tipo sangu�neo do usu�rio.
';

COMMENT ON COLUMN t_sc_usuario.ds_login IS
    'Atributo responsavel pelo login do usuario';

COMMENT ON COLUMN t_sc_usuario.ds_senha IS
    'Atributo responsavel pela senha do usuario';

ALTER TABLE t_sc_usuario ADD CONSTRAINT t_sc_usuario_pk PRIMARY KEY ( id_usuario );

CREATE TABLE t_sc_veiculo (
    id_veiculo        NUMBER(10) NOT NULL,
    nm_carro          VARCHAR2(60) NOT NULL,
    tp_veiculo        VARCHAR2(20) NOT NULL,
    ds_cor_veiculo    VARCHAR2(40) NOT NULL,
    ds_placa          VARCHAR2(7) NOT NULL,
    ds_modelo_veiculo VARCHAR2(40) NOT NULL,
    ds_veiculo        VARCHAR2(200) NOT NULL,
    qt_tripulantes    NUMBER(1) NOT NULL
);

ALTER TABLE t_sc_veiculo ADD CHECK ( qt_tripulantes BETWEEN 1 AND 5 );

COMMENT ON COLUMN t_sc_veiculo.id_veiculo IS
    'Respons�vel por armazenar a identifica��o do carro.
';

COMMENT ON COLUMN t_sc_veiculo.nm_carro IS
    'Respons�vel por armazenar o nome do carro.
';

COMMENT ON COLUMN t_sc_veiculo.tp_veiculo IS
    'Respons�vel por informar o tipo de ve�culo (carro, caminh�o, moto e etc).
';

COMMENT ON COLUMN t_sc_veiculo.ds_cor_veiculo IS
    'Responsavel por armazenar a cor do veiculo
';

COMMENT ON COLUMN t_sc_veiculo.ds_placa IS
    ' Respons�vel por armazenar a placa do ve�culo';

COMMENT ON COLUMN t_sc_veiculo.ds_modelo_veiculo IS
    'Respons�vel por armazenar a marca do ve�culo. 
';

COMMENT ON COLUMN t_sc_veiculo.ds_veiculo IS
    'Respons�vel por informar uma descri��o completa de informa��es relevantes particulares do veiculo
';

COMMENT ON COLUMN t_sc_veiculo.qt_tripulantes IS
    'Respons�vel por exibir uma previs�o de tripulantes no ve�culo.
';

ALTER TABLE t_sc_veiculo ADD CONSTRAINT t_sc_veiculo_pk PRIMARY KEY ( id_veiculo );

ALTER TABLE t_sc_chamado
    ADD CONSTRAINT relation_2 FOREIGN KEY ( id_veiculo )
        REFERENCES t_sc_veiculo ( id_veiculo );

ALTER TABLE t_sc_chamado
    ADD CONSTRAINT relation_3 FOREIGN KEY ( id_contato_emergencia )
        REFERENCES t_sc_contato_emergencia ( id_contato_emergencia );

ALTER TABLE t_sc_usuario
    ADD CONSTRAINT relation_4 FOREIGN KEY ( id_veiculo )
        REFERENCES t_sc_veiculo ( id_veiculo );

ALTER TABLE t_sc_contato
    ADD CONSTRAINT relation_5 FOREIGN KEY ( id_usuario )
        REFERENCES t_sc_usuario ( id_usuario );

ALTER TABLE t_sc_endereco
    ADD CONSTRAINT relation_6 FOREIGN KEY ( id_usuario )
        REFERENCES t_sc_usuario ( id_usuario );

ALTER TABLE t_sc_plano_saude
    ADD CONSTRAINT relation_7 FOREIGN KEY ( id_usuario )
        REFERENCES t_sc_usuario ( id_usuario );

ALTER TABLE t_sc_und_hospitalar
    ADD CONSTRAINT relation_8 FOREIGN KEY ( id_plano_saude )
        REFERENCES t_sc_plano_saude ( id_plano_saude );



-- Relat�rio do Resumo do Oracle SQL Developer Data Modeler: 
-- 
-- CREATE TABLE                             8
-- CREATE INDEX                             0
-- ALTER TABLE                             26
-- CREATE VIEW                              0
-- ALTER VIEW                               0
-- CREATE PACKAGE                           0
-- CREATE PACKAGE BODY                      0
-- CREATE PROCEDURE                         0
-- CREATE FUNCTION                          0
-- CREATE TRIGGER                           0
-- ALTER TRIGGER                            0
-- CREATE COLLECTION TYPE                   0
-- CREATE STRUCTURED TYPE                   0
-- CREATE STRUCTURED TYPE BODY              0
-- CREATE CLUSTER                           0
-- CREATE CONTEXT                           0
-- CREATE DATABASE                          0
-- CREATE DIMENSION                         0
-- CREATE DIRECTORY                         0
-- CREATE DISK GROUP                        0
-- CREATE ROLE                              0
-- CREATE ROLLBACK SEGMENT                  0
-- CREATE SEQUENCE                          0
-- CREATE MATERIALIZED VIEW                 0
-- CREATE MATERIALIZED VIEW LOG             0
-- CREATE SYNONYM                           0
-- CREATE TABLESPACE                        0
-- CREATE USER                              0
-- 
-- DROP TABLESPACE                          0
-- DROP DATABASE                            0
-- 
-- REDACTION POLICY                         0
-- 
-- ORDS DROP SCHEMA                         0
-- ORDS ENABLE SCHEMA                       0
-- ORDS ENABLE OBJECT                       0
-- 
-- ERRORS                                   0
-- WARNINGS                                 0
