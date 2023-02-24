def menu_principal():
    print('------------------------------------')
    '''
    Essa função cria o menu principal com as possível opções para a melhor interação com o usuário.
    '''
    menu = int(input('Olá! Nós somos a SafeCar e estamos fazendo uma pesquisa. Caso queira nos ajudar ou consultar algumas de nossas informações, temos algumas opções abaixo para a sua melhor escolha. \n\n(1) - Cadastrar mês de referência \n(2) - Exibir dados do mês de referência [pesquisa por mês] \n(3) - Relatório comparativo / Referência 2019 \n(4) - Listar todos os meses  \n(5) - Fechar menu \n\nDigite o número da opção desejada aqui: '))
    print('------------------------------------')
    return menu

def cria_lista():
    '''
    Essa função é responsável por criar uma lista que o código utilizará
    '''
    lista = list()
    return lista

def cria_relatorio():
    '''
    Essa função é responsável por criar o dicionario, onde guardaremos as informações de entrada do usuario
    '''
    relatorio = dict()
    return relatorio

def cadastra_ano_mes(lista, relatorio):
    '''
    Essa função é responsável por cadastrar o mês e o ano onde ocorreram os seguintes acidentes, através do formato (mês-ano)
    '''
    escolha = "S"
    while escolha == "S":
        relatorio.clear()
        relatorio['mes_ano_referencia'] = str(input("Qual mês ano você deseja registrar: (mm/YYYY)  ")).strip()
        relatorio['total_habitantes'] = int(input("Total de habitantes: "))
        relatorio['total_obitos'] = int(input("Total de óbitos: "))
        while relatorio['total_habitantes'] < relatorio['total_obitos'] or (relatorio['total_obitos'] < 0) or (relatorio['total_habitantes'] < 0) :
            print("O número de óbitos não pode ser maior que o número de habitantes! Tente novamente, por favor.")
            relatorio['total_obitos'] = int(input("Total de óbitos: "))

        print(' \n***** Gravado com sucesso *****')
        print('------------------------------------')
        escolha = str(input("Deseja cadastrar novamente? (S/N): ")).upper()[0]
        lista.append(relatorio.copy())
        if escolha != "S":
            print('------------------------------------')
            print("Muito obrigado por ter compartilhado essas informações conosco!\n ")

def consulta_ano_mes(lista):
    '''
    Essa função é responsável por consultar apenas um mes-ano específico que o usuario cadastrou
    '''
    search = str(input("Digite o mês-ano desejado: ")).strip()
    for m in lista:
        if m['mes_ano_referencia'] == search:
            print('\nMes-Ano consultado: ', m.get('mes_ano_referencia'))
            print('Total de habitantes: ', m.get('total_habitantes'))
            print('Total de óbitos: ', m.get('total_obitos'))
            return True

    return False       

def merge_sort(lista_obi):
    '''
    Essa função é responsável por ordenar a lista total de óbitos que ocorreram em um ano para uma melhor visualização do usuario
    '''
    if len(lista_obi) > 1:
        meio = len(lista_obi) // 2
        L = lista_obi[:meio]
        R = lista_obi[meio:]

        merge_sort(L)

        merge_sort(R)

        i = j = k = 0

        while i < len(L) and j < len(R):
            if L[i] <= R[j]:
                lista_obi[k] = L[i]
                i+=1
            else:
                lista_obi[k] = R[j] 
                j+=1
            k+=1    
        
        while i < len(L):
            lista_obi[k] = L[i]
            i+=1
            k+=1

        while j < len(R):
            lista_obi[k] = R[j]
            j+=1
            k+=1

def relatorio_comparativo(lista):
    '''
    Essa função é responsável por consultar os resultados de um ano inteiro, fazer e exibir um relátorio comparativo com os casos que ocorreram em 2019 e além de também exibir uma tupla do total de óbitos de forma ordenada
    '''
    lista_hab = []
    lista_obi = []
    ano = str(input("Digite o ano a ser comparado: ")).strip()
    for i in lista:
        if ano in i['mes_ano_referencia']:
            total_hab = i.get('total_habitantes', 'Chave não encontrada')
            total_obi = i.get('total_obitos', 'Chave não encontrada')
            lista_hab.append(total_hab)
            lista_obi.append(total_obi)

    soma_thab = sum(lista_hab) #soma total de habitantes no ano
    soma_tobi = sum(lista_obi) #soma total de óbitos no ano
    print(f'\nEm {ano}, o total de habitantes foi: {soma_thab}')
    print(f'O total de óbitos foi: {soma_tobi}')

    if(soma_thab >= 0):
        tx_100k_dnm = (soma_tobi * 100000) / soma_thab
        print(f"Taxa por 100k de habitantes de {ano}: ", tx_100k_dnm)
    else:
        soma_thab = 1
        print("Não encontrado.")


    tx_100k_sttc = (150 * 100000) / 1000000 #2019
    print("Taxa por 100k de habitantes em 2019: ", tx_100k_sttc)

    # ordenando maior ou menor para que o calculo seja feito de forma correta
    if tx_100k_dnm < tx_100k_sttc:
        percent = (tx_100k_sttc / tx_100k_dnm - 1) * 100
    else:
        percent = (tx_100k_dnm / tx_100k_sttc - 1) * 100

    print(f'O comparativo percentual de {ano} com 2019 é: {percent:.1f}')
    
    print('------------------------------------')

    #ordenação da tupla
    opcao = str(input("\nDeseja visualizar uma tupla do total de óbitos ordenada de forma crescente? (S/N): ")).upper()[0]
    if opcao == "S":
        print('------------------------------------')
        print("***** Ordenando... *****")
        merge_sort(lista_obi)
        ord_obi = tuple(lista_obi) #tupla
        print(ord_obi, "\n")
    else:
        print("Ok! Obrigado")

def listar_todos(lista):
    '''
    Essa função é responsável por listar todos os anos cadastrados de forma compreensível, independente do mês e o ano.
    '''
    print('**** Exibindo todos as informações cadastradas... ****')
    for i in lista:
        print('------------------------------------')
        print('Mes-Ano: ', i.get('mes_ano_referencia'))
        print('Total de habitantes: ', i.get('total_habitantes'))
        print('Total de óbitos: ', i.get('total_obitos'))
    
    print('------------------------------------')

def principal():
    '''
    Essa função será a principal. Será responsável por executar todas as outras funções anteriores
    '''
    escolha = 'S'
    lista = cria_lista()
    relatorio = cria_relatorio()
    while escolha == 'S':
        menu = menu_principal()
        if (menu == 1) or (menu == 2) or (menu == 3) or (menu == 4) or (menu == 5):
            match menu:
                case 1:
                    cadastra_ano_mes(lista, relatorio)
                case 2:
                    if consulta_ano_mes(lista) == True:
                        print(' \n***** Registro encontrado *****')
                        print('------------------------------------')
                    else:
                        print('***** Mês-ano não cadastrado! *****')
                        print('------------------------------------')
                case 3:
                    relatorio_comparativo(lista)
                case 4:
                    listar_todos(lista)
                case 5:
                    print("Tudo bem então! Agradecemos por sua iniciativa, até mais.")
                    break
        else:
            print("Opção inválida!\n\nDigite uma opção entre 1, 2, 3, 4 ou 5! Por favor.\n")
        escolha = str(input('Deseja retornar ao menu anterior novamente? (S/N): ')).upper()[0]
        print('-----------------------')
        if escolha != "S":
            print("Tudo bem então! Agradecemos por sua iniciativa, até mais.")

principal()