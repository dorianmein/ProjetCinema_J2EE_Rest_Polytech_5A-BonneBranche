package com.tppolytech.projetcinema.DAO;

import com.tppolytech.projetcinema.models.ActeurEntity;
import com.tppolytech.projetcinema.models.CategorieEntity;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

/**
 * Created by syl on 07/11/2016.
 */
@Repository
@Transactional
public class CategorieDAO {

    @Autowired
    private SessionFactory _sessionFactory;


    private Session getSession() {
        return _sessionFactory.getCurrentSession();
    }

    public void save(CategorieEntity acteur) {
        getSession().save(acteur);
        return;
    }

    public void delete(CategorieEntity acteur) {
        getSession().delete(acteur);
        return;
    }


    public List<CategorieEntity> getAll() {
        return getSession().createQuery("from CategorieEntity").list();
    }


    public void update(CategorieEntity tacos) {
        getSession().update(tacos);
        return;
    }


    // retourne si la catégorie existe ou non
    public boolean isExist(String id) {
        Query query = getSession().createQuery("from CategorieEntity where codeCat = id ");
        if (query.list().size() == 0) {
            return false;
        }
        return true;
    }
}
