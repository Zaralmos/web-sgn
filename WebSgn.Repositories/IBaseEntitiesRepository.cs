using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using WebSgn.Models;

namespace WebSgn.Repositories
{
    public interface IBaseEntitiesRepository
    {
        Task<List<Department>> GetDepartments();
        Task<Department> AddDepartment(Department department);
        Task<bool> RemoveDepartment(int id);
        Task UpdateDepartment(int id, Department source);

        Task<List<DepartmentSection>> GetDepartmentSections();
        Task<DepartmentSection> AddDepartmentSection(DepartmentSection departmentSection, string articleName = null);
        Task<bool> RemoveDepartmentSection(int id);
        Task UpdateDepartmentSection(int id, DepartmentSection source);

        Task<List<NewsItem>> GetNewsItems(SearchParameters parametrs);
        Task<NewsItem> AddNewsItem(NewsItem news, string articleName = null);
        Task<bool> RemoveNewsItem(int id);
        Task UpdateNewsItem(int id, NewsItem source);

        Task<List<Person>> GetPersons(SearchParameters parametrs);
        Task<Person> AddPerson(Person person, string articleName = null);
        Task<bool> RemovePerson(int id);
        Task UpdatePerson(int id, Person source);

        Task<Article> GetArticle(int id);
        Task<Article> AddArticle(Article article);
        Task<bool> RemoveArticle(int id);
        Task UpdateArticle(int id, Article source);
    }
}
