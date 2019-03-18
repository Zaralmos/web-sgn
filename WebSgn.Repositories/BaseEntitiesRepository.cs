using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebSgn.Database;
using WebSgn.Models;

namespace WebSgn.Repositories
{
    public class BaseEntitiesRepository : IBaseEntitiesRepository
    {
        private WebSgnDbContext dbContext;

        public BaseEntitiesRepository(WebSgnDbContext context)
        {
            dbContext = context;
        }

        public async Task<Article> AddArticle(Article article)
        {
            Article result = null;
            try
            {
                var entity = (await dbContext.Articles.AddAsync(article)).Entity;
                await dbContext.SaveChangesAsync();
                result = entity;
            }
            catch (Exception)
            {
                throw;
            }
            return result;
        }

        public async Task<Department> AddDepartment(Department department)
        {
            Department result = null;
            try
            {
                var entity = (await dbContext.Departments.AddAsync(department)).Entity;
                await dbContext.SaveChangesAsync();
                result = entity;
            }
            catch (Exception)
            {
                throw;
            }
            return result;
        }

        public async Task<DepartmentSection> AddDepartmentSection(DepartmentSection departmentSection, string articleName = null)
        {
            DepartmentSection result = null;
            try
            {
                Article newArticle = await AddArticle(new Article() { ContentJson = departmentSection.ArticleJson, Name = articleName });
                departmentSection.ArticleId = newArticle.Id;
                var entity = (await dbContext.DepartmentSections.AddAsync(departmentSection)).Entity;
                await dbContext.SaveChangesAsync();
                result = entity;
            }
            catch (Exception)
            {
                throw;
            }
            return result;
        }

        public async Task<NewsItem> AddNewsItem(NewsItem news, string articleName = null)
        {
            NewsItem result = null;
            try
            {
                Article newArticle = await AddArticle(new Article() { ContentJson = news.ArticleJson, Name = articleName });
                news.ArticleId = newArticle.Id;
                var entity = (await dbContext.NewsItems.AddAsync(news)).Entity;
                await dbContext.SaveChangesAsync();
                result = entity;
            }
            catch (Exception)
            {
                throw;
            }
            return result;
        }

        public async Task<Person> AddPerson(Person person, string articleName = null)
        {
            Person result = null;
            try
            {
                Article newArticle = await AddArticle(new Article() { ContentJson = person.ArticleJson, Name = articleName });
                person.ArticleId = newArticle.Id;
                var entity = (await dbContext.Persons.AddAsync(person)).Entity;
                await dbContext.SaveChangesAsync();
                result = entity;
            }
            catch (Exception)
            {
                throw;
            }
            return result;
        }

        public async Task<Article> GetArticle(int id)
        {
            try
            {
                return await dbContext.Articles.FindAsync(id);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<List<Department>> GetDepartments()
        {
            try
            {
                return await dbContext.Departments.ToListAsync();
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<List<DepartmentSection>> GetDepartmentSections()
        {
            try
            {
                IQueryable<DepartmentSection> sections = dbContext.DepartmentSections.Include(s => s.Article).AsQueryable();
                await sections.ForEachAsync(s => s.ArticleJson = s.Article.ContentJson);
                return await sections.ToListAsync();
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<List<NewsItem>> GetNewsItems(SearchParameters parametrs)
        {
            try
            {
                IQueryable<NewsItem> news = dbContext.NewsItems.Include(s => s.Article).Include(s => s.Departments).AsQueryable();
                await news.ForEachAsync(n => 
                {
                    n.ArticleJson = n.Article.ContentJson;
                    n.DepartmentsIds = n.Departments.Select(d => d.DepartmentId).ToList();
                });
                return await news.ToListAsync();
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<Person> GetPerson(int id)
        {
            try
            {
                return await dbContext.Persons.FindAsync(id);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<List<Person>> GetPersons(SearchParameters parametrs)
        {
            try
            {
                IQueryable<Person> persons = dbContext.Persons.Include(s => s.Article).Include(s => s.Departments).AsQueryable();
                await persons.ForEachAsync(p =>
                {
                    p.ArticleJson = p.Article.ContentJson;
                    p.DepartmentsIds = p.Departments.Select(d => d.DepartmentId).ToList();
                });
                return await persons.ToListAsync();
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<bool> RemoveArticle(int id)
        {
            try
            {
                Article article = await dbContext.Articles.FindAsync(id);
                if (article == null)
                {
                    return false;
                }
                dbContext.Articles.Remove(article);
                await dbContext.SaveChangesAsync();
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }

        public async Task<bool> RemoveDepartment(int id)
        {
            try
            {
                Department department = dbContext.Departments.Where(d => d.Id == id)
                    .Include(d => d.NewsItems)
                    .Include(d => d.WebSgnUsers)
                    .Include(d => d.Persons)
                    .First();
                if (department == null)
                {
                    return false;
                }
                dbContext.Departments.Remove(department);
                await dbContext.SaveChangesAsync();
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }

        public async Task<bool> RemoveDepartmentSection(int id)
        {
            try
            {
                DepartmentSection section = dbContext.DepartmentSections.Where(d => d.Id == id)
                    .Include(s => s.Article)
                    .First();
                if (section == null)
                {
                    return false;
                }
                dbContext.DepartmentSections.Remove(section);
                await dbContext.SaveChangesAsync();
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }

        public async Task<bool> RemoveNewsItem(int id)
        {
            try
            {
                Department department = dbContext.Departments.Where(d => d.Id == id)
                    .Include(d => d.NewsItems)
                    .Include(d => d.WebSgnUsers)
                    .Include(d => d.Persons)
                    .First();
                if (department == null)
                {
                    return false;
                }
                dbContext.Departments.Remove(department);
                await dbContext.SaveChangesAsync();
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }

        public async Task<bool> RemovePerson(int id)
        {
            try
            {
                Person person = dbContext.Persons.Where(d => d.Id == id)
                    .Include(d => d.Departments)
                    .First();
                if (person == null)
                {
                    return false;
                }
                dbContext.Persons.Remove(person);
                await dbContext.SaveChangesAsync();
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }

        public async Task UpdateArticle(int id, Article source)
        {
            try
            {
                Article article = await dbContext.Articles.FindAsync(id);
                if (article == null)
                {
                    throw new Exception("Update failed.");
                }
                article.Update(source);
                await dbContext.SaveChangesAsync();
            }
            catch (Exception)
            {
                throw;
            }    
        }

        public async Task UpdateDepartment(int id, Department source)
        {
            try
            {
                Department department = await dbContext.Departments.FindAsync(id);
                if (department == null)
                {
                    throw new Exception("Update failed.");
                }
                department.Update(source);
                await dbContext.SaveChangesAsync();
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task UpdateDepartmentSection(int id, DepartmentSection source)
        {
            try
            {
                DepartmentSection section = await dbContext.DepartmentSections.Include(s => s.Article).Where(s => s.Id == id).FirstAsync();
                if (section == null)
                {
                    throw new Exception("Update failed.");
                }
                section.Update(source);
                section.Article.ContentJson = source.ArticleJson;
                await dbContext.SaveChangesAsync();
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task UpdateNewsItem(int id, NewsItem source)
        {
            try
            {
                NewsItem news = await dbContext.NewsItems
                    .Include(n => n.Article)
                    .Include(n => n.Departments)
                    .Where(n => n.Id == id)
                    .FirstAsync();
                if (news == null)
                {
                    throw new Exception("Update failed.");
                }
                news.Update(source);
                news.Article.ContentJson = source.ArticleJson;
                await UpdateNewsItemDepartment(source, news);
                await dbContext.SaveChangesAsync();
            }
            catch (Exception)
            {
                throw;
            }
        }

        private async Task UpdateNewsItemDepartment(NewsItem source, NewsItem news)
        {
            List<int> savedDepartmentsIds = news.Departments.Select(d => d.DepartmentId).ToList();
            if (!source.DepartmentsIds.SequenceEqual(savedDepartmentsIds))
            {
                List<int> idsToDelete = news.Departments
                    .Where(d => !source.DepartmentsIds.Contains(d.DepartmentId))
                    .Select(d => d.DepartmentId)
                    .ToList();
                List<int> idsToAdd = source.DepartmentsIds.Where(i => !savedDepartmentsIds.Contains(i)).ToList();
                dbContext.NewsItemsDepartments.RemoveRange(news.Departments.Where(i => idsToDelete.Contains(i.DepartmentId)));
                await dbContext.NewsItemsDepartments.AddRangeAsync(idsToAdd.Select(i => new NewsItemDepartment() { NewsItemId = news.Id, DepartmentId = i }));
            }
        }

        public async Task UpdatePerson(int id, Person source)
        {
            try
            {
                Person person = await dbContext.Persons
                    .Include(n => n.Article)
                    .Include(n => n.Departments)
                    .Where(n => n.Id == id)
                    .FirstAsync();
                if (person == null)
                {
                    throw new Exception("Update failed.");
                }
                person.Update(source);
                person.Article.ContentJson = source.ArticleJson;
                await UpdatePersonDepartment(source, person);
                await dbContext.SaveChangesAsync();
            }
            catch (Exception)
            {
                throw;
            }
        }

        private async Task UpdatePersonDepartment(Person source, Person person)
        {
            List<int> savedDepartmentsIds = person.Departments.Select(d => d.DepartmentId).ToList();
            if (!source.DepartmentsIds.SequenceEqual(savedDepartmentsIds))
            {
                List<int> idsToDelete = person.Departments
                    .Where(d => !source.DepartmentsIds.Contains(d.DepartmentId))
                    .Select(d => d.DepartmentId)
                    .ToList();
                List<int> idsToAdd = source.DepartmentsIds.Where(i => !savedDepartmentsIds.Contains(i)).ToList();
                dbContext.PersonsDepartments.RemoveRange(person.Departments.Where(i => idsToDelete.Contains(i.DepartmentId)));
                await dbContext.PersonsDepartments.AddRangeAsync(idsToAdd.Select(i => new PersonDepartment() { PersonId = person.Id, DepartmentId = i }));
            }
        }
    }
}
