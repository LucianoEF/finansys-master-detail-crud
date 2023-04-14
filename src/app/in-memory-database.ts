import { InMemoryDbService } from "angular-in-memory-web-api";

import { Category } from "./pages/categories/shared/category.model";

export class InMemoryDatabase implements InMemoryDbService {
  //Classe de Banco de dados apartir do InMermoryDbService
  //Necessário método de createDb para simular um banco de dados
  createDb() {
    //Objeto categories conforme model Category[]
    const categories: Category[] = [
      { id: 1, name: "Moradia", description: "Pagamentos de Contas da Casa" },
      { id: 2, name: "Saúde", description: "Plano de Saúde e Remédios" },
      { id: 3, name: "Lazer", description: "Cinema, parques, praia" },
      { id: 4, name: "Salário", description: "Recebimento de Salário" },
      { id: 1, name: "Freelas", description: "Trabalho como freelancer" },
    ];

    return {categories}
  }
}
