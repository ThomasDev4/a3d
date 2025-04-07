import type { Service } from "../../../../server/src/modules/service/serviceRepository";

interface Props {
  article: Service;
  onDelete: (id: number) => void;
}

export default function ArticleCard({ article, onDelete }: Props) {
  return (
    <div className="bg-white rounded-2xl shadow p-4">
      <img
        src={article.image}
        alt={article.title}
        className="w-full h-40 object-cover rounded-xl"
      />
      <h3 className="text-xl font-bold mt-2">{article.title}</h3>
      <p className="text-gray-600">{article.texte}</p>
      <div className="flex gap-2 mt-4">
        <a
          href={`/dashboard/edit/${article.id}`}
          className="bg-yellow-500 text-white p-2 rounded-xl"
        >
          Modifier
        </a>
        <button
          type="button"
          onClick={() => onDelete(article.id)}
          className="bg-red-500 text-white p-2 rounded-xl"
        >
          Supprimer
        </button>
      </div>
    </div>
  );
}
