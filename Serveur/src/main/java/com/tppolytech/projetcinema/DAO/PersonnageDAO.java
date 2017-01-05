package com.tppolytech.projetcinema.DAO;

import com.tppolytech.projetcinema.models.FilmEntity;
import com.tppolytech.projetcinema.models.PersonnageEntity;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

/**
 * Created by syl on 26/11/2016.
 */

@Repository
@Transactional
public class PersonnageDAO {

    @Autowired
    private SessionFactory _sessionFactory;


    private Session getSession() {
        return _sessionFactory.getCurrentSession();
    }

    public void save(PersonnageEntity personnage) {
        getSession().save(personnage);
        return;
    }

    public void delete(PersonnageEntity personnage) {
        getSession().delete(personnage);
        return;
    }


    public List<PersonnageEntity> getAll() {
        return getSession().createQuery("from PersonnageEntity ").list();
    }

   /** public PersonnageEntity getById(long id) {
        return (PersonnageEntity) getSession().load(PersonnageEntity.class, id);
    }
    */

    public void update(FilmEntity tacos) {
        getSession().update(tacos);
        return;
    }

    public boolean isExit(int noAct, int noFilm) {
        Query query = getSession().createQuery("from PersonnageEntity where noAct = noAct AND noFilm = noFilm ");
        if (query.list().size() != 0) {
            return true;
        }
        return false;
    }

    public List<PersonnageEntity> getPersonnageByActeur(int noAct) {
        String query = "SELECT p FROM PersonnageEntity p WHERE noAct = :noAct";
        return getSession().createQuery(query).setInteger("noAct", noAct).list();
    }


}
