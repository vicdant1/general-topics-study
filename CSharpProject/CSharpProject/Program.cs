internal class Program
{
    static void Main(string[] args)
    {
        Console.WriteLine("============* Starting Program *============\n");

        #region Virtual Override
            //var human = new Human();
        
            //human.Fight();
            //human.Die();
        #endregion
        
        #region Generics
            /*

            var genericValueInt = new Generic<int>();
            genericValueInt.Add(13);

            var genericValueString = new Generic<string>();
            genericValueString.Add("string value in the same method");*/
        #endregion


    }

    #region Virtual Override
        /* Virtual methods are declared in the mother class
         * Only virtual methods can be overrided
         * You can use virtual methods as they were declared or override them
         * they CANNOT be private
         * A overrided method is already a virtual method to it's next generations (inheritance)
         */

    public class Animal 
    {     
        public virtual void Fight()
        {
            Console.WriteLine("Animals are fighting");
        }

        public virtual void Die()
        {
            Console.WriteLine("Animals are dying");
        }
    }

    public class Human : Animal
    {
        // overriding the default method

        public override void Fight()
        {
            Console.WriteLine("I'm a human and I fight with weapons");
        }

        // I wont override the Die() method
    }


    #endregion

    #region Generics

        public class Generic<T>
        {
            public void Add(T anyTypeValue)
            {
                Console.WriteLine("Type of <T> working. Value: \n" + anyTypeValue);
            }
        }

        // using generics constraints
        /*
         I can use generics in a method or in a whole class
         */
        public class GenConstraints
        {

            /* Useful constraints
             * where T : IComparable
             * where T : class
             * where T : Product (for instance)
             * where T : new() -> newly declareted obj
             */

            /* 
        
            This way it will NOT work, because comp doesn't know what the type of a or b

            public T Compare<T>(T a, T b)
            {
                a > b ? a : b;
                return null;
            }

            to solve this problem, we have constraints, which are tools to specify some rules to that
            generic operation

            */

            public T CompareMax<T>(T a, T b) where T : IComparable
            {
                return a.CompareTo(b) > 0 ? a : b;
            }
        }

        /* 
            It is completly fine to write a generic method inside of a no generic class

            In the most part of the cases, I'll use this on repository pattern building generic methods for crud

            generic class example:

            IBaseRepo:
            // methods to add, update, delete and save
            public interface IBaseRepo 
            {

                public void Add<T>(T entity) where T : class;
                public void Update<T>(T entity) where T : class;
                public void Delete<T>(T entity) where T : class;

                public Task<bool> SaveAsyncChanges();

            }
     
            BaseRepo:

            public class BaseRepo : IBaseRepo
            {
                private readonly AppDbContext _dbContext;

                public BaseRepo(AppDbContext dbContext)
                {
                    _dbContext = dbContext;
                }

                public void Add<T>(T entity) where T : class;
                {
                    _dbContext.Add(entity);
                }
            
                public void Update<T>(T entity) where T : class;
                {
                    _dbContext.Update(entity);
                }
    
                public void Delete<T>(T entity) where T : class;
                {
                    _dbContext.Delete(entity);
                }
            
                public Task<bool> SaveAsyncChanges();
                {
                    return await _dbContext.SaveAsyncChanges() > 0;
                }    
            }
         */

    #endregion


}