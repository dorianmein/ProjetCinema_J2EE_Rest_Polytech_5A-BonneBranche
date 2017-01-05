package com.tppolytech.projetcinema.DAO;

import com.tppolytech.projetcinema.models.ActeurEntity;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

/**
 * Created by syl on 10/10/2016.
 */
@Repository
@Transactional
public class ActeurDAO {

    @Autowired
    private SessionFactory _sessionFactory;


    private Session getSession() {
        return _sessionFactory.getCurrentSession();
    }

    public void save(ActeurEntity acteur) {
        getSession().save(acteur);
        return;
    }

    public void delete(ActeurEntity acteur) {
        getSession().delete(acteur);
        return;
    }


    public List<ActeurEntity> getAll() {
        return getSession().createQuery("from ActeurEntity").list();
    }

    /** public Tacos getByEmail(String email) {
     return (Tacos) getSession().createQuery(
     "from Tacos where email = :email")
     .setParameter("email", email)
     .uniqueResult();
     } */


    public ActeurEntity getById(int id) {
        return getSession().get(ActeurEntity.class, id);
    }

    public void update(ActeurEntity acteur) {
        getSession().update(acteur);
        return;
    }

    // retourne si l'acteur existe ou non
    public boolean isExist(int id) {
        Query query = getSession().createQuery("from ActeurEntity where noAct = id ");
        if (query.list().size() == 0) {
            return false;
        }
        return true;
    }

    public void getPersonnage(int noAct) {

    }
}
